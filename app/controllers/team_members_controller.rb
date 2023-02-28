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

    private

    def team_member_params
        params.permit(:team_id, :character_id)
    end
end
