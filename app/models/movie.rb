class Movie < ActiveRecord::Base
  has_many :favorites
  validates :youtube_id, presence: true, uniqueness: true
end
