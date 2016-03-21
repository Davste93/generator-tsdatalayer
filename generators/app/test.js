var alpsCrawler = require('./alpsCrawler');
var rootUrl = '';

alpsCrawler.profileCrawler(rootUrl).then( om => {
  console.log(om);
});
