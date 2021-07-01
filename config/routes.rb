Rails.application.routes.draw do
  resources :polls, except: %i[new edit]
  resources :users, only: %i[create index]
  resource :sessions, only: %i[create destroy]

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
