class CreateCharacterEpisodes < ActiveRecord::Migration[7.0]
  def change
    create_table :character_episodes do |t|
      t.references :charcter, null: false, foreign_key: true
      t.references :episode, null: false, foreign_key: true

      t.timestamps
    end
  end
end
