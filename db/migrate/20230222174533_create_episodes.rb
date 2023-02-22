class CreateEpisodes < ActiveRecord::Migration[7.0]
  def change
    create_table :episodes do |t|
      t.string :name
      t.string :air_date
      t.string :episode

      t.timestamps
    end
  end
end
