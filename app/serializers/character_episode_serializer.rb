class CharacterEpisodeSerializer < ActiveModel::Serializer
  attributes :id

  has_one :character
  has_one :episode
end
