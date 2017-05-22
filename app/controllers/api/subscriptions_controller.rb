class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = current_user.chatrooms.includes(:users).where(private: false)
    render 'api/subscriptions/index'
  end

  def show
    @subscription = Chatroom.find(params[:chatroom_id])
    render 'api/subscriptions/show'
  end

  def destroy
    _subscription = ChatroomUser.find_by(chatroom_id: params[:chatroom_id])
    _subscription.destroy
    @subscription = Chatroom.find(params[:chatroom_id])
    render 'api/subscriptions/show'
  end
end
