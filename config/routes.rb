Rails.application.routes.draw do
  resources :characters
  resources :episodes
  resources :character_episodes
  resources :teams
  resources :tem_members
  resources :fav_teams
  resources :fav_characters
  resources :users

  
end
