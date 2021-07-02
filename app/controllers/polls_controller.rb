class PollsController < ApplicationController
  before_action :authenticate_user_using_x_auth_token, except: [:index, :show]
  before_action :load_poll, only: %i[show update destroy]

  def index
    polls = Poll.all.order('created_at DESC')
    render status: :ok, json: { polls: polls }
  end

  def create
    @poll = Poll.new(poll_params);
    authorize @poll
    if @poll.save
      render status: :ok, json: { notice: t('successfully_created', entity: 'Poll') }
    else
      errors = @poll.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors}
    end
  end

  def show
    # authorize @poll
    render status: :ok, json: { poll: @poll.as_json(include: {
      options: {
        only: [:option, :id, :vote]
      }
    }) 
  }
  end

  def update
    if @poll.update(poll_params)
      render status: :ok, json: { notice: "Successfully updated poll" }
    else
      errors = @poll.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def destroy
    authorize @poll
    if @poll.destroy
      render status: :ok, json: { notice: "Successfully deleted poll."}
    else
      render status: :unprocessable_entity, json: { errors: @poll.errors.full_messages }
    end
  end


  private

    def poll_params
      params.require(:poll).permit(:title, :options_attributes => [:id, :option, :vote]).merge(user_id: @current_user.id)
    end

    def load_poll
      @poll = Poll.find(params[:id])
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
    end
end
