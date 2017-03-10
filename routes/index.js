var express = require('express');
var router = express.Router();
var term = require('../controllers/term');
var Term = require('../models/term');

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/imagesearch/:image', function(req, res, next) {
  const { image } = req.params;
  const { offset } = req.query;
  var query = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${image}&searchType=image`;
  if(offset) { query += `&start=${offset}` };
  axios.get(query)
    .then(function(response){
      var ris = response.data.items.map((item)=>{
        return {
          url: item.link,
          snippet: item.snippet,
          thumbnail: item.image.thumbnailLink,
          context: item.image.contextLink
        }
      });
      term.saveToDb(image);
      res.json(ris);
    })
    .catch(function(err){
      res.json({ err });
    })
});

router.get('/latest', function(req, res, next) {
  Term.find({}, {'_id': 0, 'term': 1, 'when': 1}, {sort:{when: -1}}, (err, terms)=>{
    if(err){
      console.log(err);
      return;
    }
    res.json(terms);
  });
});




module.exports = router;
