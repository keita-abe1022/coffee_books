class Coffee < ApplicationRecord
  validates :product_name, presence: true, length: { maximum: 50 }
  validates :producing_area, length: { maximum: 50 }
  validates :price, numericality: true
  validates :weight, numericality: true
  validates :shop, presence: true
  validates :comment, length: { maximum: 200 }
end
