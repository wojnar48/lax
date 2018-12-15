class Api::ChatroomUsersController < ApplicationController
  before_action :require_login
  before_action :set_chatroom

  def create
    @chatroom_user = @chatroom.chatroom_users
      .where(user_id: current_user.id).first_or_create
    render 'api/chatrooms/show'
  end

  def destroy
    @chatroom_user = @chatroom.chatroom_users
      .where(user_id: current_user.id).destroy_all
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:chatroom_id])
  end
end
