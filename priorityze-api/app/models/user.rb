class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable # ,
         # :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist

  validates :email, uniqueness: true
  validates :username, :first_name, :last_name, presence: true

end
