var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-osvana', 
    { title: 'OsvAna Realty',
      pageId: 'osvana',
      summary_p1: 'The OsvAna Realty website was built to convert property searches into real conversations. Designed with a clean, modern layout and trust-first messaging, the site guides buyers and sellers through clear service paths, intuitive navigation, and strategically placed CTAs. Every UX decision—from mobile optimization to lead capture—supports confidence, credibility, and action, helping visitors move seamlessly from browsing listings to reaching out to an agent. 🏡✨',
      link: 'https://osvanarealty.com/'
  });
});

module.exports = router;
