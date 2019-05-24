
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


})
app.put('/conseillersupdate', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");


let sql = "UPDATE Conseillers SET cons_dateEmbauche='"+req.body.cons_dateEmbauche+
  "', cons_nom="+con.escape(req.body.cons_nom)+", cons_prenom="+con.escape(req.body.cons_prenom)+", cons_email='"+req.body.cons_email+
  "', cons_tel='"+req.body.cons_tel+"', cons_adresse="+con.escape(req.body.cons_adresse)+", cons_cp="+
  req.body.cons_cp+", cons_ville="+con.escape(req.body.cons_ville)+" WHERE cons_id="+req.body.cons_id;

  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

})
app.put('/clientsupdateconseiller', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");


let sql = "UPDATE Clients SET cons_id='"+req.body.cons_id+" WHERE cons_id="+req.body.cons_id;
 /* let sql = "UPDATE Conseillers SET cons_dateEmbauche="+req.body.cons_dateEmbauche+
  ",cons_nom="+req.body.cons_nom+",cons_prenom="+req.body.cons_prenom+" WHERE cons_id="+req.body.cons_id;*/
  console.log(req.body)
  con.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results);
  });

})
app.post('/conseillerdelete', (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
console.log("delete")

let sql = "DELETE FROM Conseillers  WHERE cons_id="+req.body.cons_id;

  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

})
app.post('/conseillerinsert', (req, res) => {
console.log("insert")
  res.header("Access-Control-Allow-Origin", "*");


let sql = "INSERT  INTO Conseillers  (cons_dateEmbauche, cons_nom, cons_prenom, cons_email, cons_tel, cons_adresse,cons_cp, cons_ville) VALUES"+
"('"+req.body.cons_dateEmbauche+"',"+
  con.escape(req.body.cons_nom)+","+con.escape(req.body.cons_prenom)+",'"+req.body.cons_email+
  "','"+req.body.cons_tel+"',"+con.escape(req.body.cons_adresse)+","+
  req.body.cons_cp+","+con.escape(req.body.cons_ville)+")";


  con.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/conseillers');
  });

})
// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))










//for (i = 7; i < 9; i++) {
// scrape ('https://citation-celebre.leparisien.fr/citation/reussite?page=' + i);
//}





