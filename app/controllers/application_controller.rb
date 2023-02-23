class ApplicationController < ActionController::Base
    skip_forgery_protection
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

    before_action :authorized_user

    def current_user
        # debugger
        @user ||= User.find_by(id: session[:user_id])
    end

    def authorized_user
        # debugger
        render json: {errors: 'Not authorized'}, status: :unauthorized unless current_user 
    end
    

    private
    def invalid_error(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found_error(invalid)
        render json: {error:  "#{invalid.model} Not Found"}, status: :not_found
    end
end
