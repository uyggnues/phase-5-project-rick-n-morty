class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :gender, :image, :character_class, :origin
end
