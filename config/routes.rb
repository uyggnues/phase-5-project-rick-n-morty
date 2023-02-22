Rails.application.routes.draw do
  resources :episodes
  resources :character_episodes
  resources :teams
  resources :tem_members
  resources :characters
  resources :fav_teams
  resources :fav_characters
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
