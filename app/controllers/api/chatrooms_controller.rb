class Api::ChatroomsController < ApplicationController
  before_filter :require_login
  before_action :set_chatroom, only: [:destroy]

  def index
    @chatrooms = Chatroom.where(private: false)
    render 'api/chatrooms/index'
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      @chatroom.chatroom_users.where(user_id: current_user.id).create
      render 'api/chatrooms/show'
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  def destroy
    @chatroom.destroy
    redner 'api/chatrooms/show'
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end

  def chatroom_params
    params.require(:chatroom).permit(:name, :description)
  end
end
