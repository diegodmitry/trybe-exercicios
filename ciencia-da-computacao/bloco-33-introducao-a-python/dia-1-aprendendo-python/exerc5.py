def cost(area):
  price = 80
  one_can = 18
  required_liters = area / 3
  required_cans = required_liters // 18
  if required_liters % one_can:
    required_cans += 1
  total_price = required_cans * price
  return '{required_cans}L'.format(required_cans=required_cans), 'R$ {total_price}'.format(total_price=total_price)


print(cost(6))