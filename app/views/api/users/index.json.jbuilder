json.set! :users do
  json.array! @users do |user|
    json.extract! user, :id, :name
  end
end