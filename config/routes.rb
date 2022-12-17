Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api do
    resources :coffees, only: [:index, :show]
  end
end
