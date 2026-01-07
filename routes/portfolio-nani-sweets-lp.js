var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('portfolio-nani-sweets-lp', 
    { title: 'Nani Sweets Landing Page',
      link_external: 'https://nanisweets.ibuildwebsolutions.com/',
      pageId: 'portfolio-nani-sweets-lp',
      summary_p1: 'This Nani Sweets landing page was designed with one clear goal: conversion. Built to spotlight Nani Sweets\' allergen-friendly promise while making it effortless for visitors to take action, the layout balances warmth and trust with smart UX choices—clear value propositions, strategically placed CTAs, and a frictionless path to order or inquire. The result is a clean, inviting experience that turns curious visitors into confident customers while staying true to the brand\'s handcrafted, feel-good identity. 🍪✨',
      link: 'https://nanisweets.ibuildwebsolutions.com/'
  });
});

module.exports = router;
