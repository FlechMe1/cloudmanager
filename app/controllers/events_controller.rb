class EventsController < ApplicationController

  def index
    @events = current_user.events
    if params[:start] && params[:end]
      @events = current_user.events.where('start_at BETWEEN ? and ?', params[:start], params[:end])
    end
    if params[:category]
      @events = @events.where('category = ?', params[:category])
    end

    respond_to do |format|
      format.json
      format.html
    end
  end

  def show
    @event = Event.find params[:id]

    respond_to do |format|
      format.js
      format.html
    end

  end

  def new
    @event = current_user.events.build(start_at: params[:start_at], end_at: params[:end_at])

    respond_to do |format|
      format.js
      format.html
    end
  end

  def create
    @event = Event.new event_params

    if @event.save
      respond_to do |format|
        format.js
        format.html { redirect_to events_url }
      end
    else
      respond_to do |format|
        format.js
        format.html { render :new }
      end
    end
  end

  def edit
    @event = Event.find params[:id]

    respond_to do |format|
      format.js
      format.html
    end
  end

  def update
    @event = Event.find params[:id]
    if @event.update(event_params)
      respond_to do |format|
        format.js
        format.html { redirect_to events_url }
      end
    else
      respond_to do |format|
        format.js
        format.html { render :edit }
      end
    end
  end

  def destroy
    @event = Event.find params[:id]
    @event.destroy
    redirect_to events_url
  end


  private
    def event_params
      params.require(:event).permit(:name, :start_at, :end_at, :category, :description, :user_id)
    end

end