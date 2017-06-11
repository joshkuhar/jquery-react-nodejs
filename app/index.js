'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/table';
import { checkColor } from './helpers/color-list'


$('#button').click(function(event){
  event.preventDefault();
  var colors = $.find('.td-color')
  if(colors.length > 4){
    alert("You've reached your maximum amount of colors")
    var colors = []
    return
  }
  let color = $('#color').val()
  var checked = checkColor(color.trim())
  if (!checked) {
      alert('Please enter a valid CSS color.')
      return
  }
  postColor(color)
  $('#color').val('')
})

var postColor = function(color){
  var ajax = $.ajax('/colors', {
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({
        color: color
      }),
      contentType: 'application/json'
  });
  ajax.done(function(result){
    ReactDOM.unmountComponentAtNode(
      document.getElementById('root')
      )
    ReactDOM.render(
      <Table 
        colors={result}
      />,
      document.getElementById('root')
    )
  });
}






  