Popcorn::Application.routes.draw do
  devise_for :users
  root to:'popcorn#index'

  get "popcorn/index"

  resources :movies
  resources :favorites
  # match "*path" => 'popcorn#index', via: ['get','post']
  get '*path' => 'popcorn#index'
  post '*path' => 'popcorn#index'
end
