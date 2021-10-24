const json = require('./AjaniInspiringLeader_M20.json')

Object.values( document.getElementsByClassName('example-json') ).map( (div) => {
    div.innerHTML = JSON.stringify(json)
})