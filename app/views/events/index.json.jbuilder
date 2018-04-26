json.array! @events do |event|
  json.id event.id
  json.title event.name
  json.start (event.end_at?) ? event.start_at.to_datetime : event.start_at.to_date
  json.end event.end_at.to_datetime unless event.end_at.blank?
  json.url event_path(event)
end
