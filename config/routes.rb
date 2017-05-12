Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root to: 'static_pages#root'
  get 'api/subscriptions', to: 'api/subscriptions#index'
  get 'api/subscriptions/:chatroom_id', to: 'api/subscriptions#show'
  delete 'api/subscriptions/:chatroom_id', to: 'api/subscriptions#destroy'
  get 'api/direct_messages', to: 'api/direct_messages#index'
  post 'api/direct_messages', to: 'api/direct_messages#create'
  delete 'api/direct_messages/:chatroom_id', to: 'api/direct_messages#destroy'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :chatrooms do
      resource :chatroom_users
      resources :messages
    end
  end
end
