class SessionsController < Devise::SessionsController
    respond_to :json
    def new
    	binding.pry
    end
    def create
    	binding.pry
    end
end