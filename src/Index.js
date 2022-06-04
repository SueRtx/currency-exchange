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

    
  } else if (response === "404" ) {
   
    $("#errorOutput").text(`error code: ${response}. enter correct currency code. `);
    
    
  } else    {
    
    $("#errorOutput").text(`error code: ${response}. Check your API key .`);
  } 
} 

$(document).ready(function() {
  $("#btn-exchange").click(function(event) {
    event.preventDefault();
    const country = $("#country").val();
    const dollars = $("#dollars").val();
    CurrencyExchange.getExchange(country, dollars)	
      .then(function(newResponse) {
        displayExchange(newResponse, dollars);
      });
  });
});


