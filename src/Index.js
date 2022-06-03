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

function displayExchange(response, dollars) {
  if (response.result === "success") {
    $("#exchangeOutput").text(`$ ${dollars} in USD converts to: ${parseFloat(response.conversion_result).toFixed(2)} ${response.target_code}`);
  } else {
       $('#errorOutput').text(`${response}. There was an error. Check your API key or enter correct currency code.`);
    
    
  } 
}

$(document).ready(function() {
  $("#btn-exchange").click(function(e) {
    e.preventDefault();
    const country = $("#country").val();
    const dollars = $("#dollars").val();
    CurrencyExchange.getExchange(country, dollars)	
      .then(function(newResponse) {
        displayExchange(newResponse, dollars);
      });
  });
});


