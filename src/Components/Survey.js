import React, { useEffect, useState } from 'react';

function Survey() {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/surveys')
            .then(response => response.json())
            .then(data => setSurveys(data));
    }, []);

    return (
        <div>
            <h1>Survey Component</h1>
            <ul>
                {surveys.map(survey => (
                    <li key={survey.id}>{survey.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Survey;
