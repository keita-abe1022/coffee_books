class User < ApplicationRecord
  VALID_EMAIL_REGAX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  before_save { email.downcase! }
  validates :name, presence: true,
                    length: { maximum: 20 }
  validates :email, presence: true,
                    length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGAX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true,
                        length: { minimum: 8 }
  has_secure_password
end
