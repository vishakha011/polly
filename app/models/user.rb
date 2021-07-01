class User < ApplicationRecord

  has_many :polls, dependent: :destroy, foreign_key: :user_id
  validates :first_name, presence: true, length: {maximum: 35}
  
  
end