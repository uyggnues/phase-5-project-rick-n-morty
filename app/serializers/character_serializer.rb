class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :gender, :image, :type, :origin
end
