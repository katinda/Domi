import React, { useState } from 'react';

export default function Form({ candidates, onFormSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        height1: '',
        height2: '',
        size1: '',
        size2: ''
    });

    const optionsHeight = [];
    for (let i = 160; i <= 200; i++) {
        optionsHeight.push(<option key={i} value={i}>{i} cm</option>);
    }

    const optionsSize = [];
    for (let i = 34; i <= 58; i++) {
        optionsSize.push(<option key={i} value={i}>{i} cm</option>);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Filtrer les candidats en fonction des critères du formulaire
        const filtered = candidates.filter(candidate => {
            const nameMatch = formData.name.trim() === '' || (candidate.firstName + ' ' + candidate.lastName).toLowerCase().includes(formData.name.toLowerCase());
            const categoryMatch = formData.category === '' || candidate.category === formData.category;
            const heightMatch = formData.height1 === '' || (candidate.height >= parseInt(formData.height1) && candidate.height <= parseInt(formData.height2));
            const sizeMatch = formData.size1 === '' || (candidate.size >= parseInt(formData.size1) && candidate.size <= parseInt(formData.size2));
            return nameMatch && categoryMatch && heightMatch && sizeMatch;
        });

        console.log("Filtered Candidates:", filtered);

        // Appeler la fonction de rappel avec les candidats filtrés
        onFormSubmit(filtered);
    };

    const handleClear = () => {
        setFormData({
            name: '',
            category: '',
            height1: '',
            height2: '',
            size1: '',
            size2: ''
        });
        onFormSubmit([]); // Effacer les candidats filtrés
    };

    return (
        <div>
            <form style={{ color: "white" }} onSubmit={handleSubmit}>

                <fieldset>
                    <div><label>NAME</label></div>
                    <input className="searchname" type="text" name="name" value={formData.name} onChange={handleChange}></input>
                </fieldset>

                <fieldset>
                    <div><label>CATEGORY</label></div>
                    <select className="searchcat" name="category" value={formData.category} onChange={handleChange}>
                        <option value=""></option>
                        <option value="MainBoard">MainBoard</option>
                        <option value="New faces">New faces</option>
                        <option value="Classics">Classics</option>
                        <option value="Curve (women only)">Curve (women only)</option>
                        <option value="Influencers">Influencers</option>
                        <option value="Talent">Talent</option>
                    </select>
                </fieldset>

                <fieldset>
                    <div><label>HEIGHT</label></div>
                    <span>FROM</span>
                    <select className="searchheight1" name="height1" value={formData.height1} onChange={handleChange}>
                        <option value=""></option>
                        {optionsHeight}
                    </select>
                    <span>TO</span>
                    <select className="searchheight2" name="height2" value={formData.height2} onChange={handleChange}>
                        <option value=""></option>
                        {optionsHeight}
                    </select>
                </fieldset>

                <fieldset>
                    <div><label>SIZE</label></div>
                    <span>FROM</span>
                    <select className="searchsize1" name="size1" value={formData.size1} onChange={handleChange}>
                        <option value=""></option>
                        {optionsSize}
                    </select>
                    <span>TO</span>
                    <select className="searchsize2" name="size2" value={formData.size2} onChange={handleChange}>
                        <option value=""></option>
                        {optionsSize}
                    </select>
                </fieldset>

                <div>
                    <button type="submit">SEARCH</button>
                    <button type="button" onClick={handleClear}>CLEAR</button>
                </div>
            </form>
        </div>
    )
}
