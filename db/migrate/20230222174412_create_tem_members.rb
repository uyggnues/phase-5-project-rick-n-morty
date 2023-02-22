class CreateTemMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :tem_members do |t|
      t.references :team, null: false, foreign_key: true
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
