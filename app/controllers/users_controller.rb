class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:signup]

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

    private
    def user_params
        params.permit(:name, :email, :password)
    end
end
