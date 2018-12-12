class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      Pusher.trigger('session', 'login', {
        login: {
          id: @user.id,
          username: @user.username,
          loggedIn: @user.logged_in,
          # avatarUrl: view_context.asset_path(@user.avatar.url)
        }
      })

      render 'api/users/show'
    else
      render json: ['Invalid username/password'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      log_out
      Pusher.trigger('session', 'logout', {
        logout: {
          id: @user.id,
          username: @user.username,
          loggedIn: false,
          # avatarUrl: view_context.asset_path(@user.avatar.url)
        }
      })

      render json: {}
    else
      render json: ['No current user'], status: 404
    end
  end
end
