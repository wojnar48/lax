class Api::UsersController < ApplicationController
  before_action :require_login, only: [:index]

  def index
    @users = User.where.not(id: current_user.id)
    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
