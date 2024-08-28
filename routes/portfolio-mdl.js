var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-mdl', 
    { title: 'MD. Life',
      pageId: 'mdl',
      summary_p1: 'This Shopify-powered supplements website was designed to provide a seamless shopping experience with a focus on health and wellness. Featuring a clean, user-friendly interface, the site allows customers to easily browse and purchase products with just a few clicks. Integrated with secure payment gateways and 3PL shipping, it ensures a smooth transaction process. The site also includes a blog section for health tips and product information and email marketing integration, enhancing customer engagement and driving repeat visits. This project highlights expertise in e-commerce development, with a strong emphasis on usability and brand consistency.',
      link: 'https://md.life/'
  });
});

module.exports = router;
