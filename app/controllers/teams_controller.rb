class TeamsController < ApplicationController
    # before_action :character, only: %i[ show update destroy ]

    def index
        teams = Team.all
        render json: teams, status: :ok
    end

    def show
        team = Team.find(params[:id])
        render json: team, status: :ok
    end

    def create
        # debugger
        team = Team.create!(team_params)
        render json: team, status: :created
    end

    def user_team
        # debugger
        
        ut = @user.teams
        render json: ut, status: :ok
    end

    def destroy
        # debugger
        team = Team.find(params[:id])
        team.destroy
        head :no_content
    end

    def enemy_team
        # debugger
        et = Team.where.not(user_id: params[:user_id])
        render json: et, status: :ok
    end

    def update_team
        # debugger
        team = Team.find(params[:team][:id])
        team.update!(team_params)
        render json: team, status: :accepted
    end

    private
    def team_params
        params.permit(:name, :user_id)
    end
end

