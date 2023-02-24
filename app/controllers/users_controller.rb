class UsersController < ApplicationController
    before_action :user_pfp, only: %i[ update ]
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

    def update_pfp
      # debugger
      get_user = User.find(params[:id])
      update_user = get_user.update!(pfp: params['_json'])
      render json: update_user, status: :accepted
    end

    private
    def user_params
        params.permit(:name, :email, :password, :pfp)
    end

    def user_pfp
      # debugger
      @get_user = User.find(params[:id])
    end
end
