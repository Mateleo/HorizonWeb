import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { Team } from '../domain/team';
import { TeamMember, TeamRole } from '../domain/team-member';
import type { CreateOrUpdateTeamMember } from './dto/create-team-member.dto';
import type { CreateTeamDto } from './dto/create-team.dto';
import { GetTeamWithMembersDto } from './dto/get-team-with-members.dto';
import { GetTeamDto } from './dto/get-team.dto';
import type { UpdateTeamDto } from './dto/update-team.dto';
import { TeamRepository } from './team.repository';
import type { TeamService } from './team.service';
import { UserRepository } from './user.repository';


@Injectable()
export class DefaultTeamService implements TeamService {
    constructor(
        private readonly teamRepository: TeamRepository,
        private readonly userRepository: UserRepository,
    ) {}

    public async createTeam(dto: CreateTeamDto, currentUserId: string): Promise<GetTeamDto> {
        const team: Team = new Team(nanoid(10), dto.name, false, false);

        const user = await this.userRepository.findUserById(currentUserId);

        team.members = [
            new TeamMember(user, TeamRole.Leader),
        ];

        this.teamRepository.saveTeam(team);

        const result = new GetTeamDto();
        result.name = team.name;
        result.validated = team.isValidated;
        return result;
    }

    public async getTeam(teamId: string, currentUserId: string): Promise<GetTeamWithMembersDto> {
        const team = await this.teamRepository.findTeamById(teamId);

        const result = new GetTeamWithMembersDto();
        result.name = team.name;
        result.validated = team.isValidated;
        result.members = team.members.map(member => ({
            userId: member.user.userId,
            userName: member.user.username,
            role: member.role,
        }));
        return result;
    }

    public async addMember(teamId: string, currentUserId: string, member: CreateOrUpdateTeamMember): Promise<void> {}
    //
    // public async delete(teamId: string, userId: string, currentUserId: string): void {}
    //
    // public async deleteTeam(teamId: string, currentUserId: string): void {}
    //
    //
    // public async updateRole(teamId: string, currentUserId: string, member: CreateOrUpdateTeamMember): void {}
    //
    // public async updateTeam(teamId: string, currentUserId: string, team: UpdateTeamDto): GetTeamDto {
    //     return new GetTeamDto();
    // }
}