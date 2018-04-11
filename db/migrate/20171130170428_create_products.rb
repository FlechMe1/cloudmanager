class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :label
      t.string :reference
      t.text :description
      t.decimal :buying_price
      t.decimal :buying_price_new
      t.decimal :selling_price
      t.decimal :taxes
      t.decimal :selling_price_wt
      t.boolean :tax_credit

      t.timestamps
    end
  end
end
