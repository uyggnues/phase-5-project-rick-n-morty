class Episode < ApplicationRecord
    has_many :character_episodes
    has_many :characters, through: :character_episodes

    validates :name, presence: true
    # validates :air_date, presence: true
    # validates :episode, presence: true
end
