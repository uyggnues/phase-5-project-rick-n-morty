class User < ApplicationRecord
    has_secure_password
    
    has_many :teams, dependent: :destroy
    has_many :fav_characters, dependent: :destroy
    has_many :fav_teams, dependent: :destroy
    
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
end
    
