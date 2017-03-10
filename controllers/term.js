const Term = require('../models/term');

module.exports = {

  saveToDb(image){
    const newTerm = new Term({
      term: image
    });
    newTerm.save(function(err){
      if(err){
        console.log(err);
        return;
      }
      console.log("Inserimento effettuato.");
    });
  }

}
