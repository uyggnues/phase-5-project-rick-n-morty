class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password

  has_many :fav_characters
  has_many :fav_teams
end
