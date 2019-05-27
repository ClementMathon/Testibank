
const mysql = require ('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const con = mysql.createConnection ({
  host: 'mysql-testibank.alwaysdata.net',

  user: 'testibank',
  password: 'septembre2018',
  database: 'testibank_notreteam',
});
 citation=[]
const express = require('express')

// Create Express app
const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

/**
 * This module let us use HTTP verbs such as PUT or DELETE
 * in places where they are not supported
 */


 con.connect (err => {
    if (err) {
      console.log ('Error connecting to Db');
      return;
    }
    console.log ('Connection established');
  });
// A sample route
app.get('/conseillers', (req, res) => {
console.log ('all');

  res.header("Access-Control-Allow-Origin", "*");


  con.query ('SELECT * FROM Conseillers', (err, rows) => {
    if (err) throw err;


res.send(rows )
 //   con.end (err => {
  //res.redirect('/');
      // The connection is terminated gracefully
      // Ensures all previously enqueued queries are still
      // before sending a COM_QUIT packet to the MySQL server.
 //   });
   });


});
app.put('/conseillersmle', (req, res) => {
  res.header ('Access-Control-Allow-Origin', '*');
console.log ('mle');

  let sql ='SELECT * FROM Conseillers WHERE consId=' + req.body.consId;




  con.query (sql, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});


app.put('/conseillersupdate', (req, res) => {
console.log ('update');

  res.header("Access-Control-Allow-Origin", "*");


let sql = "UPDATE Conseillers SET consDateEmbauche='"+req.body.consDateEmbauche+
  "', consNom="+con.escape(req.body.consNom)+", consPrenom="+con.escape(req.body.consPrenom)+", consEmail='"+req.body.consEmail+
  "', consTel='"+req.body.consTel+"', consAdresse="+con.escape(req.body.consAdresse)+", consCp="+
  req.body.consCp+", consVille="+con.escape(req.body.consVille)+" WHERE consId="+req.body.consId;

  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

});
app.put('/clientsupdateconseiller', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");


let sql = "UPDATE Clients SET consId='"+req.body.consId+" WHERE consId="+req.body.consId;
 /* let sql = "UPDATE Conseillers SET consDateEmbauche="+req.body.consDateEmbauche+
  ",consNom="+req.body.consNom+",consPrenom="+req.body.consPrenom+" WHERE consId="+req.body.consId;*/
  console.log(req.body)
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });

});
app.post('/conseillerdelete', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
console.log("delete")

let sql = "DELETE FROM Conseillers  WHERE consId="+req.body.consId;

  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

});
app.post('/conseillerinsert', (req, res) => {
console.log("insert")
  res.header("Access-Control-Allow-Origin", "*");


let sql = "INSERT  INTO Conseillers  (consDateEmbauche, consNom, consPrenom, consEmail, consTel, consAdresse,consCp, consVille) VALUES"+
"('"+req.body.consDateEmbauche+"',"+
  con.escape(req.body.consNom)+","+con.escape(req.body.consPrenom)+",'"+req.body.consEmail+
  "','"+req.body.consTel+"',"+con.escape(req.body.consAdresse)+","+
  req.body.consCp+","+con.escape(req.body.consVille)+")";


  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

});
// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))










//for (i = 7; i < 9; i++) {
// scrape ('https://citation-celebre.leparisien.fr/citation/reussite?page=' + i);
//}





