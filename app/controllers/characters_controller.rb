class CharactersController < ApplicationController
    before_action :character, only: %i[ show update destroy ]
    def index
        characters = Character.all
        render json: characters, status: :ok
    end

    def show
        render json: @char, status: :ok
    end
    private
    def character
        @char = Character.find(params[:id])
    end
end
