class EpisodesController < ApplicationController
    before_action :find_episode, only: %i[ show update destroy ]

    def index
        episodes = Episode.all
        render json: episodes, status: :ok
    end

    def show
        render json: @ep, status: :ok
    end

    private
    def find_episode
        @ep = Episode.find(params[:id])
    end
end
