import React from 'react';
import "../Pictures/Pictures.css";
import candidatImage from "../Candidat/Capture d’écran 2021-07-23 à 14.12.38.png";
import { Link } from 'react-router-dom';

export default function Pictures({ candidates }) {

    return (
        <div>
            {candidates.map((candidate) => (
                <div key={candidate.id} className="image-container">
                    <img src={candidatImage} alt={`${candidate.firstName} ${candidate.lastName}`} className="image"/>
                    <div className="overlay">
                        <div className="plus">+</div>
                        <p className="text">ADD TO CASTING</p>
                        {/*<p className="hover-text">{`${candidate.firstName} ${candidate.lastName}`}</p>*/}
                        <Link to={`/description/${candidate.id}`} className="hover-text">
                            {`${candidate.firstName} ${candidate.lastName}`}
                        </Link>
                    </div>
                    <div className="NameCandidat">{`${candidate.firstName} ${candidate.lastName}`}</div>
                </div>
            ))}
        </div>
    )
}