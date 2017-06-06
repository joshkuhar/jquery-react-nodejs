'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/table';

const container = document.getElementById('root')

// var updateReact = function(cb){
//   const length = cb
//   console.log(length)
// }

function getAllColorTiles(){
  return $.find('.tile')
}

var postColor = function(color, flavor){
    var ajax = $.ajax('/colors', {
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify({
          color: color
        }),
        contentType: 'application/json'
    });
    ajax.done(function(result){
      // if(result.limit){
      //   alert("you've reached your limit of 5")
      // }
      // *************
      // Below is the event horizon.
      // The data that is going in
      // will not make it back out. It 
      // can be altered or destroyed, but 
      // will not be able to be used by 
      // any other part of the DOM
      // *************
      // EVENT HORIZON
      // *************
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
    var tiles = $.find('.tile')
    if(tiles.length > 4){
      alert("You've reached your maximum amount of tiles")
      return
    }
    let color = $('#color').val()
    postColor(color)
    $('#color').val('')
    // ***************
    // This starts the process of mounting
    // and unmounting the React Component.
    // Even though there isn't a 
    // React component rendered yet,
    // The method 'unmountComponentAtNode' 
    // below can be called
    // ****************
    ReactDOM.unmountComponentAtNode(
        container
      )
})









  