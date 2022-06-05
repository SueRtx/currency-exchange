import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchange.js';

function displayExchange(response, dollars) {
  if (response.result === "success") {
    $("#errorOutput").hide();
    $("#exchangeOutput").show();
    $("#exchangeOutput").html(`$ ${dollars} in USD converts to: ${parseFloat(response.conversion_result).toFixed(2)} ${response.target_code}`);
  } else if (response === "404" ) {
    $("#exchangeOutput").hide();
    $("#errorOutput").show();
    $("#errorOutput").html(`error code: ${response}. Enter correct currency code.`);
  } else    {
    $("#exchangeOutput").hide();
    $("#errorOutput").show();
    $("#errorOutput").html(`error code: ${response}. Check your API key.`);
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


