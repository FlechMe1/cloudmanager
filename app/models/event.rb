class Event < ActiveRecord::Base

  belongs_to :user

  validates :name, :start_at, :category, presence: true

  validates :category, inclusion: { in: %w(appointment call meeting task mail),
                    message: "%{value} n'est pas une catégorie disponible" }



  def get_dates
    date = ""

    if !self.end_at?
      date += "#{I18n.l self.start_at.to_date, format: :short2}"
    else
      date += "Du #{I18n.l self.start_at, format: :excel} au #{I18n.l self.end_at, format: :excel}"
    end

    date
  end
end
