class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :title
      t.string :completed.boolean
      t.string :goal_id.integer
      t.string :order.integer

      t.timestamps
    end
  end
end
