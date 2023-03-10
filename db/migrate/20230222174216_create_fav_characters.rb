class CreateFavCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :fav_characters do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
