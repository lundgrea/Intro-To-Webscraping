var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://boulder.craigslist.org/')
  .click('a[href="/d/tickets/search/tia"]')
  .wait('time')
  .evaluate(function () { 
    var nameNodes = document.querySelectorAll('time')
    var list = [].slice.call(nameNodes)
    return list.map(function(node){
      return node.innerText
    })
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });


