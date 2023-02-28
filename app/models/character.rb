class Character < ApplicationRecord
    has_many :fav_characters
    has_many :fav_teams
    has_many :team_members
    has_many :character_episodes
    has_many :teams, through: :team_members
    has_many :episodes, through: :character_episodes

    validates :name, presence: true, uniqueness: true
    validates :species, presence: true
    validates :gender, presence: true
    validates :image, presence: true
    # validates :character_class, presence: true
    validates :origin, presence: true
end
