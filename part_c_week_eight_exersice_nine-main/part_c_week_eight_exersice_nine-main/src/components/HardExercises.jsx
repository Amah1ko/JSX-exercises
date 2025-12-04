import React from 'react';

// Exercise 12
export function Exercise12() {
    const students = ["Ali", "Aida", "Nurlan"];

    // Создаем элементы без JSX
    const listItems = students.map((name, index) =>
        React.createElement('li', { key: index }, name)
    );

    const studentList = React.createElement('ul', null, listItems);

    return (
        <div>
            <h3>Exercise 12: Mapping Without JSX</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <h4>Without JSX (React.createElement):</h4>
                    {studentList}
                </div>
                <div>
                    <h4>With JSX:</h4>
                    <ul>
                        {students.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Exercise 21
export function Exercise21() {
    const htmlContent = {
        __html: '<h2>Dangerous HTML</h2><p>This HTML is rendered safely</p>'
    };

    return (
        <div>
            <h3>Exercise 21: JSX and XSS Safety</h3>
            <div dangerouslySetInnerHTML={htmlContent} />
        </div>
    );
}

// Общий компонент для сложных упражнений
export default function HardExercises() {
    return (
        <div className="exercises-section">
            <h2>Hard Level Exercises</h2>
            <div className="exercise-container">
                <Exercise12 />
                <hr />
                <Exercise21 />
            </div>
        </div>
    );
}