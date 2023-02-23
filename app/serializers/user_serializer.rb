class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :teams, :pfp

  has_many :fav_characters
  has_many :fav_teams

  def teams
    self.object.teams
  end
end
