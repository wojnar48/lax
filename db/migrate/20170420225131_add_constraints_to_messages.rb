class AddConstraintsToMessages < ActiveRecord::Migration[5.0]
  def change
    change_column :messages, :user_id, :integer, null: false
    change_column :messages, :chatroom_id, :integer, null: false
  end
end
