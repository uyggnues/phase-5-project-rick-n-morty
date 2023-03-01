class FavTeamsController < ApplicationController

    def create
        new_fav_team = FavTeam.create!(fav_team_params)
        render json: new_fav_team, status: :created
    end

    def delete_fav
        favorite = FavTeam.where(user_id: params[:user_id], team_id: params[:team_id])
        favorite.destroy_all
        head :no_content
    end

    private
    def fav_team_params
        params.permit(:user_id, :team_id)
    end
end
