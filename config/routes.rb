Rails.application.routes.draw do
  resources :characters
  resources :episodes
  resources :character_episodes
  resources :teams
  resources :team_members
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
  delete '/users/:user_id/fav_characters/:character_id', to: 'fav_characters#delete_fav'
  get '/users/:id/fav_characters', to: 'users#user_favorites'

  delete '/users/:user_id/fav_teams/:team_id', to: 'fav_teams#delete_fav'
  get '/users/:id/fav_teams', to: 'users#user_favorite_teams'
end
