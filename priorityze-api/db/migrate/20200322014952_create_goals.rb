class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.timestamp :deadline
      t.boolean :completed, default: false
      t.belongs_to :user, foreign_key: true
      t.string :goal_icon

      t.timestamps
    end
  end
end
