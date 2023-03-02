class CharacterEpisode < ApplicationRecord
  belongs_to :character
  belongs_to :episode
end
