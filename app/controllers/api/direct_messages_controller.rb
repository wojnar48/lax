class Api::DirectMessagesController < ApplicationController
  def index
    @chatrooms = Chatroom.where(private: true)
    render 'api/chatrooms/index'
  end

  def create
    @chatroom = Chatroom.new(name: 'private', private: true)

    if @chatroom.save
      @chatroom.chatroom_users.where(user_id: current_user.id).create
      chatroom_params.each do |user_id|
        user_id = user_id.to_i
        user = User.find(user_id)
        @chatroom.chatroom_users.where(user_id: user.id).create
      end
      render 'api/direct_messages/show'
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  private
  # secure this
  def chatroom_params
    params.require(:chatroom)
  end
end
