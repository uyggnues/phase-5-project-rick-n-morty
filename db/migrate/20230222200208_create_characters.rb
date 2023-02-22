class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :species
      t.string :gender
      t.string :image
      t.string :character_class
      t.string :origin

      t.timestamps
    end
  end
end
