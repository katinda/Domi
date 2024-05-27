/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import candidatesData from './LinkAlpha/Candidat.json';
import Form from "./Form/Form.js";
import Pictures from "./Pictures/Pictures";

export default function Women({ LinkBox }) {
    function ConditionalDisplay({ active, children }) {
        return active ? children : null;
    }

    const [contentToDisplay, setContentToDisplay] = useState('');
    const { data: candidates, error, isLoading } = useSWR('/api/Candidat.json', () => candidatesData);
    const [filteredCandidates, setFilteredCandidates] = useState([]); // État pour les candidats filtrés
    const [formSubmitted, setFormSubmitted] = useState(false); // État pour suivre si le formulaire a été soumis

    useEffect(() => {
        if (candidates) {
            setFilteredCandidates(candidates.filter(candidate => candidate.gender.toLowerCase() === 'female'));
        }
    }, [candidates]);

    const handleClick = (letter) => {
        setContentToDisplay(letter);
        setFormSubmitted(false); // Réinitialiser l'état du formulaire lors du clic sur une lettre
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        $("button").click(function () {
            $(".slide").toggle("blind", 1000);
        });
    }, []);

    const handleFormSubmit = (filteredData) => {
        setFilteredCandidates(filteredData.filter(candidate => candidate.gender.toLowerCase() === 'female'));
        setFormSubmitted(true); // Marquer que le formulaire a été soumis
    };

    if (error) return <div>échec du chargement</div>
    if (isLoading) return <div>chargement...</div>
    return (
        <div>
            {/*<LinkBox />*/}
            <nav className="flex flex-row gap-4">
                {alphabet.split('').map((letter, index) => (
                    <span key={index} onClick={() => handleClick(letter)}>{letter}</span>
                ))}
            </nav>

            <div>
                <button>toggle the div</button>
            </div>

            <section className="slide">
                <Form candidates={filteredCandidates} onFormSubmit={handleFormSubmit} />
            </section>

            <section>
                {formSubmitted &&
                    <Pictures candidates={filteredCandidates} />
                }
                {!formSubmitted && contentToDisplay === '' &&
                    <Pictures candidates={filteredCandidates} />
                }
                <ConditionalDisplay active={contentToDisplay !== '' && !formSubmitted}>
                    <Pictures
                        candidates={candidates.filter(candidate => candidate.firstName.charAt(0).toUpperCase() === contentToDisplay && candidate.gender.toLowerCase() === 'female')} />
                </ConditionalDisplay>
            </section>
        </div>
    )
}
