class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]

    def login
        # debugger
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            cookies[:total_login] ||= 0
            cookies[:total_login] = cookies[:total_login].to_i + 1
            render json: user, status: 200
        else
            render json: {error: 'Invalid Credentials!'}, status: 401
        end
    end

    def logout
        session.delete :user_id
        render json: {message: "Successfully logged out"}, status: :ok
    end

    # def me
    #     current_user = Player.find_by_id(session[:user_id]) if session[:user_id]
    #     if current_user 
    #         render json: current_user, status: :ok
    #     else
    #         render json: {message: 'no one is logged in!'}, status: :not_found
    #     end
    # end
end
