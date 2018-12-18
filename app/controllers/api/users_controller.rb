class Api::UsersController < ApplicationController
  before_action :require_login, only: [:index]

  def index
    @users = User.where.not(id: current_user.id)
    render 'api/users/index'
  end

  def create
    uparams = user_params
    @user = User.new(username: uparams[:username], password: uparams[:password])

    # TODO(SW): Find a better way of doing this
    # See: https://stackoverflow.com/questions/45870021/how-to-update-attachment-in-activestorage-rails-5-2
    @user.avatar.purge_later
    if (uparams[:avatar] == 'null')
      file = File.open('app/assets/images/philoraptor.jpg')
      @user.avatar.attach(io: file, filename: 'philoraptor.jpg')
    else
      @user.avatar.attach(uparams[:avatar])
    end

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
