from collections import Counter

class Estatistica:

  # tornamos um método da classe
  @classmethod
  def media(cls, numbers):
    return sum(numbers) / len(numbers)

  # tornamos um método da classe
  @classmethod
  def mediana(cls, numbers):
    numbers.sort()
    index = len(numbers)
    if len(numbers) % 2 == 0:
      return (numbers[index - 1] + numbers[index]) / 2

    return numbers[index]

  # tornamos um método da classe
  @classmethod
  def moda(cls, numbers):
    number, _ = Counter(numbers).most_common()[0]
    return number


# Existem duas formas de chamar um método que está dentro da classe
# 1. tornando ele como método da classe com: @classmethod
#  ex: MyClass.some_class_method()
# 2. através de uma instância da classe:
#  ex: my_class_instance = MyClass()
#      my_class_instance.some_class_method()