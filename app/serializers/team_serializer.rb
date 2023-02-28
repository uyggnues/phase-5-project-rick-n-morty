class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :team_members

  has_one :user
  # has_many :team_members

  def team_members
    self.object.team_members.map(&:character)
  end
end
