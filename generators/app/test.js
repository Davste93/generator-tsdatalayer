var alpsCrawler = require('./alpsCrawler');
var rootUrl = '';

alpsCrawler.profileCrawler(rootUrl).then( om => {
  var fs = require('fs');
  fs.writeFile("/tmp/test", JSON.stringify(om), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});
