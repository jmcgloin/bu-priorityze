class Goal < ApplicationRecord
	has_many :steps
	belongs_to :user

	validates :title, :deadline, presence: true
	validates :title, uniqueness: true
end
