const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint pour le fichier JSON
app.get('/Candidat.json', (req, res) => {
    // Lecture du fichier Candidat.json
    fs.readFile('./Candidat.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier Candidat.json :", err);
            res.status(500).send("Erreur serveur lors de la lecture du fichier Candidat.json");
            return;
        }

        // Définition de l'en-tête Content-Type
        res.setHeader('Content-Type', 'application/json');

        // Envoi du contenu JSON
        res.status(200).send(data);
    });
});

// Endpoint de test
app.get('/testing', (req, res) => {
    console.log('testing');
    res.status(200).json([{ "nod": "hello" }, { "next": "hello1" }]);
});

// Endpoint par défaut
app.get('/', (req, res) => {
    console.log('asd');
    res.status(200).json('welcome');
});

app.listen(4000, () => {
    console.log("listening on 4000");
});
