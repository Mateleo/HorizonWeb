import {
  BeforeUpdate,
  Entity,
  EventArgs,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Exclude } from 'class-transformer';
import { nanoid } from 'nanoid';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../users/user.entity';

@Entity()
export class Comment {
  @PrimaryKey()
  commentId: string = nanoid(10);

  @ManyToOne()
  post!: Post;

  @Property({ type: 'text' })
  body!: string;

  @ManyToOne()
  author!: User;

  @Property()
  upvotes = 0;

  @Property()
  downvotes = 0;

  @Property()
  contentLastUpdatedAt = new Date();

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  @Exclude()
  updatedAt = new Date();

  constructor(options: {
    post: Post;
    body: string;
    author: User;
  }) {
    this.post = options.post;
    this.body = options.body;
    this.author = options.author;
  }

  @BeforeUpdate()
  public beforeUpdate(event: EventArgs<this>): void {
    const payload = event.changeSet?.payload;
    if (payload && ('title' in payload || 'body' in payload))
      this.contentLastUpdatedAt = new Date();
  }
}
