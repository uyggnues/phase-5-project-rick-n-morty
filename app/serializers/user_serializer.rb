class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :key, :teams, :pfp, :fav_char, :fav_teams, :team_members, :team_asso

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

  def team_members
    self.object.teams.map do |team|
      team.team_members.map do |member|
        member.character
      end
    end
  end

  def team_asso
    self.object.teams.map do |team|
      team.team_members
    end
  end
end
