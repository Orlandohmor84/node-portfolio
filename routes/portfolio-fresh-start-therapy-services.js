var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-fresh-start-therapy-services', 
    { title: 'Fresh Start Therapy Services',
      pageId: 'fresh-start-therapy-services',
      summary_p1: "The upgrade to Fresh Start Therapy Services' previous website highlights their services, therapist, and mission, while seamlessly integrating HIPAA-compliant practice management software to ensure secure appointment scheduling, client communication, and document handling.",
      summary_p2: "This integration not only supports Fresh Start’s virtual care model but also enhances the overall client experience with streamlined, confidential access to therapy services from any device. In addition, search engine optimization practices were integrated without sacrificing design or user experience.",
      link: 'https://fstherapyservices.com/'
  });
});

module.exports = router;
