const url = 'https://api.coincap.io/v2/assets';

const showDom = (dataFromAPI = 'nothing was passed') => {
  const ul = document.getElementById('criptoContainer');

  const li = document.createElement('li');
  li.textContent = dataFromAPI;
  ul.appendChild(li);
};

const fetchURLCurrency = async () => {
  const urlCurrency =
    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
  try {
    const response = await fetch(urlCurrency);
    const data = await response.json();
    const { brl } = await data.usd;
    console.log(brl);
    return brl;
  } catch (e) {
    console.error('Error from URL', e);
  }
};

const fetchURLCoin = async () => {
  const objReq = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const currency = await fetchURLCurrency();
  console.log(currency);

  fetch(url, objReq)
    .then((response) => response.json())
    .then((data) => {
      // data.data.forEach((element, i) => {
      //   if(i < 10) showDom(`${element.name} (${element.symbol}): ${Number(element.priceUsd).toFixed(2)}`);
      // });
      return data.data.filter((element, i) => {
        const brlPrice = element.priceUsd * currency;
        if (i < 10)
          showDom(
            `${element.name} (${element.symbol}): R$${Number(
              brlPrice
            ).toFixed(2)}`
          );
      });
    })
    .catch((e) => console.error('error generated by query: ', e));
};
fetchURLCoin();


