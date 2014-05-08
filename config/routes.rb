Popcorn::Application.routes.draw do
  root to:'popcorn#index'

  get "popcorn/index"


  # match "*path" => 'popcorn#index', via: ['get','post']
  get '*path' => 'popcorn#index'
  post '*path' => 'popcorn#index'
end
