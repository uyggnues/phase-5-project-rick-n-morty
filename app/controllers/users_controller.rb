class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:signup, :facebook]

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

    def facebook
      # debugger
      facebook_user = User.find_or_create_by(email: params[:email]) do |u|
        u.name = params[:name] 
        u.email = params[:email] 
        u.password = SecureRandom.hex(16)
        u.provider_id = params[:id]
      end
    end

    def user_favorites
      user = User.find(params[:id])
      user_fav = user.fav_characters
      render json: user_fav, status: :ok
    end

    private
    def user_params
        params.permit(:name, :email, :password, :pfp)
    end
end
