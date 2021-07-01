class UsersController < ApplicationController

  def index
    users = User.all.as_json(only: %i[id first_name last_name])
    render status: :ok, json: { users: users }
  end

  def create
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end