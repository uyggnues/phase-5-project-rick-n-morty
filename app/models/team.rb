class Team < ApplicationRecord
    belongs_to :user
    has_many :team_members
    has_many :fav_teams
    has_many :characters, through: :team_members
    
    validates :name, presence: true
end
