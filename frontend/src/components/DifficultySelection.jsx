import React from 'react';

function DifficultySelection({ onDifficultyChange }) {
    const handleDifficultyChange = (event) => {
        onDifficultyChange(event.target.value);
    };

    return (
        <div>
            <h2>Select Difficulty:</h2>
            <select onChange={handleDifficultyChange}>
                <option value="">Choose...</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
        </div>
    );
}

export default DifficultySelection;
