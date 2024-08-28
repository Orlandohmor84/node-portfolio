var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-web-solutions', 
    { title: 'I Build Web Solutions',
      pageId: 'ibws',
      summary_p1: 'This dynamic website, crafted for my marketing agency, combines sleek design with powerful functionality to elevate my online presence. The site features a clean, modern aesthetic, with intuitive navigation and engaging visuals that capture my agency\'s brand essence. A responsive layout ensures seamless performance across all devices.',
      summary_p2: 'Lead generation forms are strategically placed to capture potential clients, driving conversions and growing my agency\'s client base. This project showcases a commitment to creating high-performing, visually appealing websites tailored to the unique needs of marketing professionals.',
      link: 'https://ibuildwebsolutions.com/'
  });
});

module.exports = router;
