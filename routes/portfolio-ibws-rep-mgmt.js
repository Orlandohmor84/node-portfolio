var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-ibws-rep-mgmt', 
    { title: 'Reputation Management',
      pageId: 'ibws-rep-mgmt',
      summary_p1: 'This I Build Web Solutions Reputation Management sales landing page was built to turn concern into confidence—and clicks into leads. The page focuses on clarity and trust, using problem-aware messaging, social proof, and strategically placed CTAs to show business owners exactly how their online reputation impacts revenue. Clean layout, persuasive copy flow, and conversion-focused UX decisions guide visitors toward taking action, positioning reputation management as an essential growth tool—not an afterthought. ⭐🚀',
      link: 'https://ibuildweb.agency/ibws-reputation-management-home'
  });
});

module.exports = router;
