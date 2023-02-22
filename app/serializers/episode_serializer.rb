class EpisodeSerializer < ActiveModel::Serializer
  attributes :id, :name, :air_date, :episode

  has_many :character_episodes
end
