class AddImportanceToGoals < ActiveRecord::Migration[6.0]
  def change
    add_column :goals, :importance, :integer
  end
end
