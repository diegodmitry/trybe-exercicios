const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // return (`Olá ${JSON.stringify(order.order.delivery.deliveryPerson)}, entrega para: ${JSON.stringify(order.name)}, Telefone: ${JSON.stringify(order.phoneNumber)}, R. ${JSON.stringify(order.address.street)}, Nº: ${JSON.stringify(order.address.number)}, AP: ${JSON.stringify(order.address.apartment)}`);

  const [deliveryPerson] = Object.values(order.order.delivery);
  const [name, phoneNumber] = Object.values(order);
  const [street, number, apartment] = Object.values(order.address);

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // changing values
  order.order.delivery = 'Luiz Silva';
  order.payment.total = 50;

  // Putting values into variables
  const deliveryPerson = Object.values(order.order.delivery);
  const [marguerita, pepperoni] = Object.keys(order.order.pizza);
  const [type] = Object.values(order.order.drinks.coke);
  const [value] = Object.values(order.payment)
   
  return `Olá ${deliveryPerson.join('')} o total do seu pedido de ${marguerita}, ${pepperoni} e ${type} é R$ ${value.toFixed(2)}.`

}

console.log(orderModifier(order));