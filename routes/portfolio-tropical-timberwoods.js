var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-tropical-timberwoods', 
    { title: 'Tropical Timberwoods',
      pageId: 'tropical-timberwoods',
      summary_p1: 'I developed a modern, user-friendly website for a manufacturing company, enhancing their online presence with streamlined navigation, responsive design, and optimized lead generation features.',
      link: 'https://tropicaltimber.com/'
  });
});

module.exports = router;
