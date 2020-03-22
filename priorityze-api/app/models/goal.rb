class Goal < ApplicationRecord
	has_many :steps, dependent: :destroy
	belongs_to :user

	validates :title, :deadline, presence: true
	validates :title, uniqueness: true
end
