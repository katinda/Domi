import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import candidatesData from '../LinkAlpha/Candidat.json';
import candidatImage from "../Candidat/Capture d’écran 2021-07-23 à 14.12.38.png";
import "./Description.css";

export default function Description() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(parseInt(id));

    // Récupérer le candidat actuel
    const candidate = candidatesData.find(candidate => candidate.id === currentIndex);

    // Vérifier si le candidat avec l'ID spécifié existe
    if (!candidate) {
        return <div>Candidat introuvable</div>;
    }

    // Gérer la navigation vers le candidat précédent
    const goToPrevious = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 1) {
            navigate(`/description/${previousIndex}`);
            setCurrentIndex(previousIndex);
        }
    };

    // Gérer la navigation vers le candidat suivant
    const goToNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex <= candidatesData.length) {
            navigate(`/description/${nextIndex}`);
            setCurrentIndex(nextIndex);
        }
    };

    // Gérer la navigation vers la page Women ou Men en fonction du genre du candidat
    const goToGenderPage = () => {
        if (candidate.gender === 'female') {
            navigate('/Women');
        } else if (candidate.gender === 'male') {
            navigate('/Men');
        }
    };

    return (
        <div className="description-container">
            <div className="pictures">
                <img src={candidatImage} alt={`${candidate.firstName} ${candidate.lastName}`} />
                {/* Ajoutez d'autres images ou informations sur les images ici */}
            </div>
            <div className="description">
                <h2>{candidate.firstName} {candidate.lastName}</h2>
                <p>Nom: {candidate.firstName} {candidate.lastName}</p>
                <p>Genre: {candidate.gender}</p>
                <p>Catégorie: {candidate.category}</p>
                <p>Hauteur: {candidate.height}</p>
                <p>Taille: {candidate.size}</p>
            </div>
            <div className="navigation-buttons">
                <button onClick={goToPrevious}>Previous</button>
                <button onClick={goToNext}>Next</button>
                <button onClick={goToGenderPage}>Voir {candidate.gender === 'female' ? 'les femmes' : 'les hommes'}</button>
            </div>
        </div>
    );
}
