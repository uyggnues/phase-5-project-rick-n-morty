class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :key, :teams, :pfp, :fav_char, :fav_teams

  # has_many :fav_characters
  # has_many :fav_teams

  def teams
    self.object.teams
  end

  def fav_char
    self.object.fav_characters
  end

  def fav_teams
    self.object.fav_teams
  end

  def key
    if self.object.key_words != nil
      self.object.key_words.split(',')
    end
  end
end
