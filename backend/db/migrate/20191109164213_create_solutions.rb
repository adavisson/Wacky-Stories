class CreateSolutions < ActiveRecord::Migration[5.0]
  def change
    create_table :solutions do |t|
      t.string :title
      t.integer :template_id
      t.text :words

      t.timestamps
    end
  end
end
