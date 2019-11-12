class SolutionsController < ApplicationController
  def show
    solution = Solution.find(params[:id])
    render json: solution, only: [:id, :title, :words]
  end
end
