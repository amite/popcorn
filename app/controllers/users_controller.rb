class UsersController < ApplicationController
  before_filter :authenticate_user_from_token!, :only => [:index, :movies]
  #before_action :correct_user

  respond_to :json

  # find a list of users that match certain queries
  def index
    return permission_denied unless \
      (params[:id].to_s == @current_user.id.to_s) ||
        (params[:email].to_s == @current_user.email.to_s)


    @users = User.where(params.permit(:id, :email))

    if @users
      render status: :ok,
             json: @users.as_json
    else
      render status: :not_found,
             json: {
                 error: "Users not found"
             }
    end
  end

  def movies
    return permission_denied unless params[:id].to_s == @current_user.id.to_s


    @user = User.find(params[:id])

    if @user
      render status: :ok,
             json: @user.movies.as_json
    else
      render status: :not_found,
             json: {
                 error: "User #{params[:id]} not found"
             }
    end
  end


  private

  def correct_user
    @user = User.find(params[:id])
    return permission_denied unless current_user?(@user)
  end

  def current_user?(user)
    user == current_user
  end
end