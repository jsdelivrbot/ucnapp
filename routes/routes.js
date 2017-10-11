'use strict';

var path =require('path');
var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var exhortationSubject =['les_tresors','manteau','paix'],
  cultesSubject =['culte_anglophone','culte_russophone','main_culte'],
  programmesSubject =['evenements','horaires'],
  mediatequeSubject =['billeterie_concert','cantiques'],
  activitesSubject =['club','media','louange','jeunesse','chant_nouveau_belgique','chant_nouveau_dieuze','femmes','equipe_accueil','intercession'],
  _ =require('lodash');

/* GET home page. */

module.exports.router = function(app) {
  // app.use(express.static(path.join(__dirname,'../','public')));

  app.use('/static', express.static('public'));


  app.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname,'../views/','/accueil.html'));
  });

  app.get('/:routesParams', function (req, res, next) {
    var urlToSend =req.params.routesParams +'.html';
    return res.sendFile(path.join(__dirname,'../views/',urlToSend));
  });

  //Routes des exhortations
  app.get('/exhortations/:routesParams', function (req, res, next) {
    if(_.includes(exhortationSubject,req.params.routesParams)){
      var urlToSend =req.params.routesParams +'.html';
      return res.sendFile(path.join(__dirname,'../views/exhortations/',urlToSend));
    }
    else{
      return res.redirect('/'+req.params.routesParams);
    }
  });

  //Routes des activités
  app.get('/activites/:routesParams', function (req, res, next) {
    if(_.includes(activitesSubject,req.params.routesParams)){
      var urlToSend =req.params.routesParams +'.html';
      return res.sendFile(path.join(__dirname,'../views/activites/',urlToSend));
    }
    else{
      return res.redirect('/'+req.params.routesParams);
    }
  });

  //Routes des cultes
  app.get('/cultes/:routesParams', function (req, res, next) {
    if(_.includes(cultesSubject,req.params.routesParams)){
      var urlToSend =req.params.routesParams +'.html';
      return res.sendFile(path.join(__dirname,'../views/cultes/',urlToSend));
    }
    else{
      return res.redirect('/'+req.params.routesParams);
    }
  });

  //Routes des programmes
  app.get('/programmes/:routesParams', function (req, res, next) {
    if(_.includes(programmesSubject,req.params.routesParams)){
      var urlToSend =req.params.routesParams +'.html';
      return res.sendFile(path.join(__dirname,'../views/programmes/',urlToSend));
    }
    else{
      return res.redirect('/'+req.params.routesParams);
    }
  });

  //Routes du mediateque
  app.get('/mediateque/:routesParams', function (req, res, next) {
    if(_.includes(mediatequeSubject,req.params.routesParams)){
      var urlToSend =req.params.routesParams +'.html';
      return res.sendFile(path.join(__dirname,'../views/mediateque/',urlToSend));
    }
    else{
      return res.redirect('/'+req.params.routesParams);
    }
  });

};

