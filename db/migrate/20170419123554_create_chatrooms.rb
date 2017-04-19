class CreateChatrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.string :name, null: false, index: true
      t.text :description
      t.timestamps
    end
  end
end
