class UsersController < ApplicationController
    before_action :find_user, only: %i[ destroy ] 
    skip_before_action :authorized_user, only: [:signup, :oauth]

    def show
        render json: @user, status: :ok
    end

    def getOne
      user = User.find(params[:id])
      render json: user, status: :ok
    end

    def signup
        user = User.create(user_params)
        if user.id
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: {message: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update_pfp
      get_user = User.find(params[:id])
      get_user.update!(pfp: params['_json'])
      render json: get_user, status: :accepted
    end

    def oauth
      # debugger
      user = User.find_or_create_by(email: params[:email]) do |u|
        u.name = params[:name] 
        u.email = params[:email] 
        u.password = SecureRandom.hex(16)
        # u.provider_id = params[:id]
      end
      if user.id
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: {message: user.errors.full_messages}, status: :unprocessable_entity
      end
    end

    def user_favorites
      user = User.find(params[:id])
      user_fav = user.fav_characters
      render json: user_fav, status: :ok
    end

    def user_favorite_teams
      user = User.find(params[:id])
      user_fav = user.fav_teams
      render json: user_fav, status: :ok
    end

    def update
      # debugger
      # get_user = User.find(params[:id])
      @user.update!(user_params)
      render json: @user, status: :accepted
    end

    def destroy
      @userz.destroy
      head :no_content
    end

    private

    def find_user
      @userz = User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password, :key_words)
    end
end
