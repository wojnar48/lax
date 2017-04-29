class Api::DirectMessagesController < ApplicationController
  def index
    @chatrooms = Chatroom.where(private: true)
    render 'api/chatrooms/index'
  end
end
