var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio-tiof-lp', 
    { title: 'The Institute of F.I.L.M.S. Landing Pages',
      pageId: 'tio-lp',
      summary_p1: 'Developed 17 variations of landing pages integrated with automated sales lead management processes. Also configured Klaviyo email automations for leads.',
      summary_p2: 'Created asset cache and versioning system to allow smooth publication of continuously updated content and styles based off user activity and project goals.',
      link: 'https://learn.theinstituteoffilms.org/1/'
  });
});

module.exports = router;
