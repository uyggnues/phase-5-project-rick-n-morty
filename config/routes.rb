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
  get '/users/:id/fav_teams', to: 'users#user_favorite_teams'
  get '/ch_ep/:character_id', to: 'character_episodes#starred_episodes'
  get '/ep_ch/:episode_id', to: 'character_episodes#starring_characters'
  get '/user_team/:user_id', to: 'teams#user_team'
  get '/users/:id/fav_characters', to: 'users#user_favorites'
  
  post '/login', to:'sessions#login'
  post '/signup', to: 'users#signup'
  post '/facebook/:id', to: 'users#facebook'

  patch '/users_pfp/:id', to: 'users#update_pfp'
  
  delete '/users/:user_id/fav_characters/:character_id', to: 'fav_characters#delete_fav'
  delete '/logout', to: 'sessions#logout'
  delete '/users/:user_id/fav_teams/:team_id', to: 'fav_teams#delete_fav'
end
