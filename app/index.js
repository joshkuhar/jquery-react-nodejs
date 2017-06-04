'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/table';

const container = document.getElementById('root')

var postColor = function(color, flavor){
    var ajax = $.ajax('/colors', {
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify({
          color: color,
          flavor: flavor
        }),
        contentType: 'application/json'
    });
    ajax.done(function(result){
      console.log(result)
      ReactDOM.render(
        <Table 
          colors={result}
        />,
        container
      )
    });
}

var text = $('#submit').click(function(event){
    event.preventDefault();
    let color = $('#color').val()
    let flavor = $('#flavor').val()
    postColor(color, flavor)
    $('#color').val('')
    $('#flavor').val('')
    ReactDOM.unmountComponentAtNode(
        container
      )
})









  