class Api::ChatroomsController < ApplicationController
  before_action :set_chatroom, only: [:destroy]

  def index
    # eventually this will be just public chatrooms
    @chatrooms = Chatroom.all
    render 'api/chatrooms/index'
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      debugger
      # we want to create a chatroom to user association at the same time
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
