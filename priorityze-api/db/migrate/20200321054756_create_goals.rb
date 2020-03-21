class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.string :deadline.timestamp
      t.string :completed.boolean
      t.string :importance.integer

      t.timestamps
    end
  end
end
