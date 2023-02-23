class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :user

  has_many :team_members

  def user
    self.object.team_members.user
  end
end
