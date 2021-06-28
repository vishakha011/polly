Rails.application.routes.draw do
  resources :polls, only: :index
end
