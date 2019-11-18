class SolutionsController < ApplicationController
  def index
    solutions = Solution.all
    render json: solutions, only:[:id, :template_id, :title, :words]
  end

  def show
    solution = Solution.find(params[:id])
    render json: solution, only: [:id, :template_id, :title, :words]
  end
end
