class TeamsController < ApplicationController
    # before_action :character, only: %i[ show update destroy ]

    def index
        teams = Team.all
        render json: teams, status: :ok
    end

    def create
        # debugger
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    def user_team
        ut = Team.where(params[:user_id])
        render json: ut, status: :ok
    end

    private
    def team_params
        params.permit(:name, :user_id)
    end
end

