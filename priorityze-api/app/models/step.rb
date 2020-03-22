class Step < ApplicationRecord
	belongs_to :goal
	validates :metric, presence: true
end
