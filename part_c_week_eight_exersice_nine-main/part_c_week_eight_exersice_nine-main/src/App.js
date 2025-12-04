import React from 'react';
import EasyExercises from './components/EasyExercises';
import MediumExercises from './components/MediumExercises';
import HardExercises from './components/HardExercises';
import './styles.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>JSX Practice Exercises</h1>
                <p className="subtitle">React JSX Fundamentals - Easy, Medium & Hard Exercises</p>
            </header>

            <main className="main-content">
                <EasyExercises />
                <MediumExercises />
                <HardExercises />
            </main>

            <footer className="app-footer">
                <p>JSX Practice Project - React Fundamentals</p>
            </footer>
        </div>
    );
}

export default App;