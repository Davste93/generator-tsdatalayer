var alpsCrawler = require('./alpsCrawler');

alpsCrawler.profileCrawler('https://api.fundsrouter.com/profile').then(om => {
  console.log(om);
});
