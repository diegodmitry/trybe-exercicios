from codigo import is_odd

def test_is_odd_when_number_is_odd_returns_true():
  'Para um número ímpar a funcao deve retornar a valor True'
  assert is_odd(3) is True

def test_is_odd_when_number_is_odd_returns_false():
  'Para um número ímpar a funcao de retornar o valor False'
  assert is_odd(2) is False


