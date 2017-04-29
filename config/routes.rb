Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'api/subscriptions', to: 'api/subscriptions#index'
  get 'api/subscriptions/:chatroom_id', to: 'api/subscriptions#show'
  delete 'api/subscriptions/:chatroom_id', to: 'api/subscriptions#destroy'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :chatrooms do
      resource :chatroom_users
      resources :messages
    end
  end
end
