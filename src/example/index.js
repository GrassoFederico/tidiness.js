import './app.css'

import json from './AjaniInspiringLeader_M20.json'

Object.values( document.getElementsByClassName('example-json') ).map( (div) => {
    div.innerHTML = JSON.stringify(json)
})