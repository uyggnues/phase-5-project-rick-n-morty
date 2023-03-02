class CharacterEpisodesController < ApplicationController
    def starred_episodes
        # debugger
        eps = CharacterEpisode.where(character_id: params[:character_id])
        render json: eps, status: :ok
    end
end
