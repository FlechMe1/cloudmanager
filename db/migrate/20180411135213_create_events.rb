class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_at
      t.datetime :end_at
      t.string :category
      t.references :user
      t.string :description

      t.timestamps
    end
  end
end
