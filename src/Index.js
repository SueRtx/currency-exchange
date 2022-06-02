import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';



/*
function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}*/

function displayExchange(response, dollar) {
  if (response.main) {
    $('.exchangeOutput').text(`${dollar} is ${(Math.round(response.conversion_result))} is ${response.target_code}`);
  
    
  } else {
    $('.errorOutput').text(`There was an error: ${response}`);
  }
}
/*
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    WeatherService.getWeather(city)
      .then(function(response) {
        getElements(response);
      });
  });
});
*/