class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :title
      t.boolean :completed
      t.integer :goal_id
      t.integer :order

      t.timestamps
    end
  end
end
