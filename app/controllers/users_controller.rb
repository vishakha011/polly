class UsersController < ApplicationController

  def index
    @user = User.new(user_params)
    if @user.save
      render status: :ok, json: { notice: t('successfully_created', entity: 'User')}
    else
      render status: :unprocessable_entity, json: {
        errors: @user.errors.full_messages.to_sentence
      }
    end
  end

  def create
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end