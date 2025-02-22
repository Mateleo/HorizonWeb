import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post as PostRequest,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { SearchResponse } from 'typesense/lib/Typesense/Documents';
import { CurrentUser } from '../shared/lib/decorators/current-user.decorator';
import { TypesenseGuard } from '../shared/lib/guards/typesense.guard';
import { Action, CheckPolicies } from '../shared/modules/authorization';
import { PaginateDto } from '../shared/modules/pagination/paginate.dto';
import type { PaginatedResult } from '../shared/modules/pagination/pagination.interface';
import { SearchDto } from '../shared/modules/search/search.dto';
import { VoteDto } from '../shared/modules/vote/vote.dto';
import { User } from '../users/user.entity';
import { ArticleSearchService } from './article-search.service';
import type { IndexedArticle } from './article-search.service';
import { ArticleVotesService } from './article-votes.service';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import type { ArticleVote, NoArticleVote } from './entities/article-vote.entity';
import { Article } from './entities/article.entity';

@ApiTags('Articles')
@Controller({ path: 'articles' })
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly articleVotesService: ArticleVotesService,
    private readonly articleSearchService: ArticleSearchService,
  ) {}

  @PostRequest()
  @CheckPolicies(ability => ability.can(Action.Create, Article))
  public async create(@CurrentUser() user: User, @Body() createPostDto: CreateArticleDto): Promise<Article> {
    return await this.articlesService.create(user, createPostDto);
  }

  @Get()
  @CheckPolicies(ability => ability.can(Action.Read, Article))
  public async findAll(@Query() query: PaginateDto): Promise<PaginatedResult<Article>> {
    if (query.page)
      return await this.articlesService.findAll({ page: query.page, itemsPerPage: query.itemsPerPage ?? 10 });
    return await this.articlesService.findAll();
  }

  @UseGuards(TypesenseGuard)
  @Get('/search')
  @CheckPolicies(ability => ability.can(Action.Read, Article))
  public async search(
    @Query('full') full: boolean,
    @Query() query: SearchDto,
  ): Promise<SearchResponse<Article> | SearchResponse<IndexedArticle>> {
      if (full)
        return await this.articleSearchService.searchAndPopulate(query);
      return await this.articleSearchService.search(query);
  }

  @Get(':id')
  @CheckPolicies(ability => ability.can(Action.Read, Article))
  public async findOne(@Param('id', ParseIntPipe) id: number): Promise<Article> {
    return await this.articlesService.findOne(id);
  }

  @Patch(':id')
  @CheckPolicies(ability => ability.can(Action.Update, Article))
  public async update(
    @CurrentUser() user: User,
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articlesService.update(user, id, updatePostDto);
  }

  @Delete(':id')
  @CheckPolicies(ability => ability.can(Action.Delete, Article))
  public async remove(@CurrentUser() user: User, @Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.articlesService.remove(user, id);
  }

  @Get(':id/vote')
  @CheckPolicies(ability => ability.can(Action.Read, Article))
  public async findVote(
    @CurrentUser() user: User,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ArticleVote | NoArticleVote> {
    return await this.articleVotesService.findVote(user, id);
  }

  @PostRequest(':id/vote')
  @CheckPolicies(ability => ability.can(Action.Interact, Article))
  public async vote(
    @CurrentUser() user: User,
    @Param('id', ParseIntPipe) id: number,
    @Body() voteDto: VoteDto,
  ): Promise<Article> {
    if (voteDto.value === 0)
      return await this.articleVotesService.neutralize(user, id);
    return await this.articleVotesService.update(user, id, voteDto.value);
  }
}
