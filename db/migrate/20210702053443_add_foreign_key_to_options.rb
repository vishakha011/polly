class AddForeignKeyToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :poll_id, :integer
    add_foreign_key :options, :polls, column: :poll_id, on_delete: :cascade
  end
end
