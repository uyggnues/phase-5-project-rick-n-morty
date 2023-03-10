class CreateFavTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :fav_teams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
