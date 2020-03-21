class Goal < ApplicationRecord
	has_many :steps
	# belong_to :user
end
