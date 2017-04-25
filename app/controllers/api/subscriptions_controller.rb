class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = current_user.chatrooms
    render 'api/subscriptions/index'
  end
end
