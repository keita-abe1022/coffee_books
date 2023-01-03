Rails.application.routes.draw do
  get 'home/index'
  root to: 'home#index'
  namespace :api do
    resources :coffees, only: [:index, :show, :create, :update]
  end
end
