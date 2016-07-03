"use strict";
var EntityCrawler_1 = require('./EntityCrawler');
var crawler = new EntityCrawler_1.EntityCrawler({
    headers: {
        'Authorization': 'Basic dGVzdDp0ZXN0' }
});
crawler.crawlFromRoot('https://api.fundsrouter.com/profile');
