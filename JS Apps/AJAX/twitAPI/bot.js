console.log('hello');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'IvbkfwU8OTyu1xXbfwrFAEtDH',
  consumer_secret:      'lnfJ7VJumJzGAXLorwcoeGcAQ1scvnE5TJhSDjdnDPYAHpD2QN',
  access_token:         '797803916620693508-uWKZfstcmyXZtg9ltPrAEPeRaSFNPEo',
  access_token_secret:  '8uTwCD3Gvf2WOBAZdOHBUlC1z9KaUg1UiiDgQ7xDHoX3v',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2016-07-11', count: 100 }, function(err, data, response) {
  console.log(data);
});
