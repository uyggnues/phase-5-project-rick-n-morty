class FavCharactersController < ApplicationController


    def create
        fav_char = FavCharacter.create!(fav_char_params)
        render json: fav_char, status: :created
    end

    def delete_fav
        favorite = FavCharacter.where(user_id: params[:user_id], character_id: params[:character_id])
        favorite.destroy_all
        head :no_content
    end

    private
    
    def fav_char_params
        params.permit(:user_id, :character_id)
    end
end
