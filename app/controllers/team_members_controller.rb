class TeamMembersController < ApplicationController

    # def index
    #     members = TeamMember.all
    #     render json: members, status: :ok
    # end


    def create
        # debugger
        team_member = TeamMember.create(team_member_params)
        render json: team_member, status: :created
    end

    def update_team_members
        debugger
        team_member = TeamMember.find_by(character_id: params[:search_id])
        team_member.update!(team_member_params)
        render json: team_member, status: :accepted
    end

    private

    def team_member_params
        params.permit(:team_id, :character_id)
    end
end
