var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-health-insurance-now', 
    { title: 'Health Insurance Now',
      pageId: 'health-insurance-now',
      summary_p1: 'The Health Insurance Now landing page, crafted by I Build Web Solutions, is a sleek and user-focused design that simplifies the process of exploring and applying for health insurance. Featuring a clean layout, intuitive navigation, and engaging call-to-action elements, the page is optimized to enhance user experience and drive conversions. The design integrates seamlessly with branding, showcasing trustworthiness and professionalism, while ensuring responsiveness across all devices.',
      link: 'https://healthinsurancenow.online/'
  });
});

module.exports = router;
