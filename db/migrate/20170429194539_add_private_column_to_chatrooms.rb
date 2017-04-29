class AddPrivateColumnToChatrooms < ActiveRecord::Migration[5.0]
  def change
    add_column :chatrooms, :private, :boolean, default: false
  end
end
