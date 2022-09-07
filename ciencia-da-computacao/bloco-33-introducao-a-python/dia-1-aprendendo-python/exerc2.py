number_list = [45, 34, 10, 36, 12, 6, 80]

def avg_math(number_list):
  avg = sum(number_list)/len(number_list)
  return print('The avg is ', round(avg, 2))

avg_math(number_list)