class Api::MessagesController < ApplicationController
  before_action :require_login
  before_action :set_chatroom

  def index
    # TODO(SW): This seems hacky. Review the UI logic and see if this can be improved.
    # If we are dealing with a private chatroom, we want to make sure that
    # a user who is not part of the chatroom can't fetch the messages
    if @chatroom.private?
      if user_in_chatroom?
        @messages = @chatroom.messages.includes(:user)
        render 'api/messages/index'
      else
        render json: ['User is not part of the private chatroom'], status: 401
      end
    else
      @messages = @chatroom.messages.includes(:user)
      render 'api/messages/index'
    end
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

  def user_in_chatroom?
    !@chatroom.chatroom_users.where(user_id: current_user.id).empty?
  end

  def set_chatroom
    @chatroom = Chatroom.find(params[:chatroom_id])
  end

  def message_params
    params.require(:message).permit(:body)
  end
end
