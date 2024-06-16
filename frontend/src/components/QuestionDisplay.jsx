import React from 'react';

function QuestionDisplay({ question }) {
    return (
        <div>
            <h2>Question:</h2>
            <p>{question.text}</p>
            {question.answer_choices && (
                <div>
                    <h3>Answer Choices:</h3>
                    <ul>
                        {question.answer_choices.split(',').map((choice) => (
                            <li key={choice}>{choice}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default QuestionDisplay;
