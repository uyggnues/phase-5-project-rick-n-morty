class FavCharacterSerializer < ActiveModel::Serializer
  attributes :id

  has_one :user
  has_one :character

end
