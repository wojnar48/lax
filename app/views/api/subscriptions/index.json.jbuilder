json.array! @subscriptions do |subscription|
  json.id subscription.id
  json.name subscription.name
  json.description subscription.description
  json.private subscription.private
  json.users subscription.users do |user|
    json.id user.id
    json.username user.username
  end
end
