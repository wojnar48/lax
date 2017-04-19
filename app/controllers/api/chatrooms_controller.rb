class Api::ChatroomsController < ApplicationController
  before_action :set_chatroom, only: [:destroy]

  def index
    # think about making this public
    @chatrooms = Chatroom.all
  end

  def show
    # this will eventually show messages in chatroom
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      @chatroom.chatroom_users.where(user_id: current_user.id).first_or_create
      render 'api/chatrooms/show'
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  def destroy
    @chatroom.destroy
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:id])
  end

  def chatroom_params
    params.require(:chatroom).permit(:name)
  end
end
