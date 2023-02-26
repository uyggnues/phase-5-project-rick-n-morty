class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :teams, :pfp, :fav_char

  # has_many :fav_characters
  # has_many :fav_teams

  def teams
    self.object.teams
  end

  def fav_char
    self.object.fav_characters
  end
end
