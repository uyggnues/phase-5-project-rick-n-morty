class CharacterEpisodesController < ApplicationController
    def starred_episodes
        # debugger
        eps = CharacterEpisode.where(character_id: params[:character_id])
        render json: eps, status: :ok
    end

    def starring_characters
        chars = CharacterEpisode.where(episode_id: params[:episode_id])
        render json: chars, status: :ok
    end
end
