class Solution < ApplicationRecord
  belongs_to :template
  serialize :words
end
