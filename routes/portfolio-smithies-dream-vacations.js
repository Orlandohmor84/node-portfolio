var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-smithies-dream-vacations', 
    { title: 'Smithies Dream Vacations',
      pageId: 'smithies-dream-vacations',
      summary_p1: 'Showcase website for a travel agency. CRM setup with email marketing, pipelines, and automations for sales agents.',
      link: 'https://smithiesdreamvacations.net/'
  });
});

module.exports = router;
