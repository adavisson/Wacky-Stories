class SolutionsController < ApplicationController
  def index
    solutions = Solution.all
    render json: solutions, only:[:id, :template_id, :title, :words]
  end

  def show
    solution = Solution.find(params[:id])
    render json: solution, only: [:id, :template_id, :title, :words]
  end

  def create
    solution = Solution.find_or_create_by(title: params[:title], words: params[:words], template_id: params[:template_id])
    render json: solution, only: [:id, :template_id, :title, :words]
  end
end
