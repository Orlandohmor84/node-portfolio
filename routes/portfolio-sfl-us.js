var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-sfl-us', 
    { title: 'Smart for Life U.S. Ecommerce Website',
      link_external: 'https:\/\/www.smartforlife.com',
      summary_p1: 'A fast, sleek, and beautifully designed eCommerce website tailored for Smart for Life. This custom theme was created using Shopify\'s new OS 2.0 theme architecture using Dawn as a starting point and modified with custom templates, sections, and metadata to duplicate static mock ups designed exclusively for Smart for Life. Theme syncs with Shopify via GitHub for version control capabilities.',
      summary_p2: 'Approximately 30 previously connected apps and externally connected software services from Shopify\'s legacy theme architecture reintegrated to fit new OS 2.0 architecture. Initial release was in December 2022 after about two months of development. Continuous improvements on the website are ongoing.',
      pageId: 'portfolio-sfl-us'
  });
});

module.exports = router;
