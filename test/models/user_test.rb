require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(first_name: 'Sam',
                     last_name: 'Smith',
                     email: 'sam@example.com',
                     password: 'welcome',
                     password_confirmation: 'welcome')
  end

  def test_user_should_be_not_be_valid_without_first_name
    @user.first_name = ''
    assert_not @user.valid?
    assert_equal ["Name can't be blank"], @user.errors.full_messages
  end

  def test_first_name_should_be_of_valid_length
    @user.first_name = 'a' * 50
    assert @user.invalid?
  end