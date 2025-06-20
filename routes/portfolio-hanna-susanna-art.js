var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-hanna-susanna-art', 
    { title: 'Hanna Susanna Art',
      pageId: 'portfolio-hanna-susanna-art',
      summary_p1: 'I redesigned the online presence for Hanna Susanna, a visual artist specializing in vibrant, expressive works. The new site enhances the viewing experience with a minimalist layout, faster load times, mobile optimization, and an intuitive gallery structure to showcase her art beautifully and professionally.',
      link: 'https://www.hannasusannaart.com/'
  });
});

module.exports = router;
