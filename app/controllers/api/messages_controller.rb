class Api::MessagesController < ApplicationController
  before_action :require_login
  before_action :set_chatroom

  def index
    @messages = @chatroom.messages.includes(:user)
    render 'api/messages/index'
  end

  def create
    @message = @chatroom.messages.new(message_params)
    @message.user = current_user

    if @message.save
      Pusher.trigger('messages', 'new-message', {
        message: {
          id: @message.id,
          body: @message.body,
          author: @message.user.username,
          avatarUrl: view_context.url_for(@message.user.avatar),
          date: @message.created_at,
          userId: @message.user_id,
          chatroomId: @message.chatroom_id
        }
      })
    end
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:chatroom_id])
  end

  def message_params
    params.require(:message).permit(:body)
  end
end
