class TemplatesController < ApplicationController
  def index
    templates = Template.all
    render json: templates, only: [:title, :story, :hints]
  end
end
