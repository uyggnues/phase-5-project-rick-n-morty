class TeamMember < ApplicationRecord
  belongs_to :team
  belongs_to :character

  # validates :name, presence: true
end
