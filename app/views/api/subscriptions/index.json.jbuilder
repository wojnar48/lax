json.array! @subscriptions do |subscription|
  json.id subscription.id
  json.name subscription.name
  json.description subscription.description
  json.users subscription.users do |user|
    json.id user.id
    json.username user.username
  end
end
