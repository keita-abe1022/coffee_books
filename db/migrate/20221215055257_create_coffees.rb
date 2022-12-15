class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :product_name, null: false
      t.string :producing_area
      t.string :price
      t.string :weight
      t.string :purchasing_system
      t.string :degree_of_roasting
      t.string :grind
      t.string :brew
      t.string :shop
      t.text :comment

      t.timestamps
    end
  end
end
