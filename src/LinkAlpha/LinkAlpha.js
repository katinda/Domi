/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import candidatesData from './Candidat.json';
import "./LinkAlpha.css";
import Form from "../Form/Form.js";
import Pictures from "../Pictures/Pictures.js";

export default function LinkAlpha() {
    function ConditionalDisplay({ active, children }) {
        return active ? children : null;
    }

    const [contentToDisplay, setContentToDisplay] = useState('');
    const { data: candidates, error, isLoading } = useSWR('/api/Candidat.json', () => candidatesData);

    console.log(candidates);
    console.log("Error:", error);
    console.log("Is loading:", isLoading);

    const handleClick = (letter) => {
        setContentToDisplay(letter);
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        $("button").click(function () {
            $(".slide").toggle("blind", 1000);
        });
    }, []);

    if (error) return <div>échec du chargement</div>
    if (isLoading) return <div>chargement...</div>

    return (
        <div>
            <nav className="flex flex-row gap-4">
                {alphabet.split('').map((letter, index) => (
                    <span key={index} onClick={() => handleClick(letter)}>{letter}</span>
                ))}
            </nav>

            <div>
                <button>toggle the div</button>
            </div>

            <section className="slide" >
                <Form />
            </section>

            <section>
                <ConditionalDisplay active={contentToDisplay !== ''}>
                    <Pictures candidates={candidates.filter(candidate => candidate.firstName.charAt(0).toUpperCase() === contentToDisplay)} />
                </ConditionalDisplay>
            </section>

           {/* <section>
                <ConditionalDisplay active={contentToDisplay !== ''}>
                    <div>
                        {candidates &&
                            candidates
                                .filter(candidate => candidate.firstName.charAt(0).toUpperCase() === contentToDisplay)
                                .map((candidate) => (
                                    <div key={candidate.id}>{candidate.firstName} {candidate.lastName}</div>
                                ))}
                    </div>
                </ConditionalDisplay>
            </section>*/}
        </div>
    )
}

