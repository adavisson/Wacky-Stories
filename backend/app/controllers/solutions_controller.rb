class SolutionsController < ApplicationController
  def show
    solution = Solution.find(params[:id])
    render json: solution, only: [:title, :words]
  end
end
