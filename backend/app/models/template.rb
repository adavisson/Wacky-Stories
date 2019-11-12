class Template < ApplicationRecord
  has_many :solutions
  serialize :story
  serialize :hints
end
