class TeamsController < ApplicationController
    # before_action :character, only: %i[ show update destroy ]

    def create
        # debugger
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    private
    def team_params
        params.permit(:name, :user_id)
    end
end

