class Api::MessagesController < ApplicationController
  before_action :set_chatroom

  def index
    @messages = @chatroom.messages
    render 'api/messages/index'
  end

  # make sure to render errors
  def create
    @message = @chatroom.messages.new(message_params)
    @message.user = current_user

    if @message.save
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: 422
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
