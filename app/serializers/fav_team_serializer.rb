class FavTeamSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :team
  belongs_to :user
end
