class FavCharacter < ApplicationRecord
  belongs_to :user
  belongs_to :character
end
