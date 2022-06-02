export default class CurrencyExchange {  
  static getExchange(country, dollar) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}/${dollar}`)
    .then(function(response) {

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error.message;
    });

  }
}
