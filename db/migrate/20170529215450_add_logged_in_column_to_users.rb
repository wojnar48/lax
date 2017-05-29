class AddLoggedInColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :logged_in, :boolean, default: false
  end
end
