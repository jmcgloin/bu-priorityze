class RegistrationsController < Devise::RegistrationsController
   respond_to :json

   def create
   	binding.pry
   end
end
