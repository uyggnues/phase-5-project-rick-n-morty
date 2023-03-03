class Team < ApplicationRecord
    belongs_to :user
    has_many :team_members, dependent: :destroy
    has_many :fav_teams, dependent: :destroy
    has_many :characters, through: :team_members
    
    validates :name, presence: true
end
