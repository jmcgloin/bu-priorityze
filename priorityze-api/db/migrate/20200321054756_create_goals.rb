class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.timestamp :deadline
      t.boolean :completed
      t.integer :importance

      t.timestamps
    end
  end
end
