Rails.application.routes.draw do
  resources :characters
  resources :episodes
  resources :character_episodes
  resources :teams
  resources :tem_members
  resources :fav_teams
  resources :fav_characters
  resources :users

  get '/authorized_user', to: 'users#show'
  post '/login', to:'sessions#login'
  post '/signup', to: 'users#signup'
  delete '/logout', to: 'sessions#logout'
  patch '/users_pfp/:id', to: 'users#update_pfp'
  post '/facebook/:id', to: 'users#facebook'
  # get '/user', to: 'users#show'

end
