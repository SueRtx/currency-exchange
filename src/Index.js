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

$(document).ready(function() {
  $("#btn-exchange").click(function(event) {
    event.preventDefault();

    let country = $('#currency').val();
    let dollar =  $('#num').val();
    CurrencyExchange.getExchange(country, dollar)

      .then(function(newResponse) {
        displayExchange(newResponse, dollar);
      });
  });
});
