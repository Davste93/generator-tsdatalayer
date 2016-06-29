import {EntityCrawler} from './EntityCrawler';

let crawler: EntityCrawler = new EntityCrawler(
  {
    headers: {
    'Authorization' : 'Basic dGVzdDp0ZXN0'}
  });

  crawler.crawlFromRoot('https://api.fundsrouter.com/profile');
