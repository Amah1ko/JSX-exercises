import React from 'react';

// Exercise 1
export function Exercise1() {
    const titleElement = <h1>Welcome to Engineering College</h1>;
    return (
        <div>
            <h3>Exercise 1: Simple Heading JSX</h3>
            {titleElement}
        </div>
    );
}

// Exercise 2
export function Exercise2() {
    const firstName = "Nurlan";
    const lastName = "Shaidullaev";

    return (
        <div>
            <h3>Exercise 2: JSX with Embedded Expression</h3>
            <p>Hello, {firstName} {lastName}!</p>
        </div>
    );
}

// Exercise 3
export function Exercise3() {
    return (
        <div>
            <h3>Exercise 3: Fix Attribute Names</h3>
            <div className="header">
                <h1 onClick={() => alert('Hi')}>Click me</h1>
            </div>
        </div>
    );
}

// Exercise 4
export function Exercise4() {
    return (
        <div>
            <h3>Exercise 4: Single Root Element</h3>
            <div>
                <h1>Hello</h1>
                <p>Welcome to the course</p>
            </div>
        </div>
    );
}

// Exercise 5
export function Exercise5() {
    return (
        <div>
            <h3>Exercise 5: Self-Closing Tags</h3>
            <div>
                <img src="/avatar.png" alt="Avatar" />
                <br />
                <span>Student</span>
            </div>
        </div>
    );
}

// Exercise 13
export function Exercise13() {
    function handleClick() {
        console.log("Clicked!");
    }

    return (
        <div>
            <h3>Exercise 13: Event Handler Syntax</h3>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

// Exercise 22
export function Exercise22({ name }) {
    return (
        <div className="profile-card">
            <h3>Exercise 22: Component Naming & Case</h3>
            <h3>{name}</h3>
        </div>
    );
}

// Exercise 23
export function Exercise23() {
    return (
        <div>
            <h3>Exercise 23: JSX Comments</h3>
            {/* Main title of the page */}
            <h1>JSX Practice</h1>
        </div>
    );
}

// Общий компонент для всех легких упражнений
export default function EasyExercises() {
    return (
        <div className="exercises-section">
            <h2>Easy Level Exercises</h2>
            <div className="exercise-container">
                <Exercise1 />
                <hr />
                <Exercise2 />
                <hr />
                <Exercise3 />
                <hr />
                <Exercise4 />
                <hr />
                <Exercise5 />
                <hr />
                <Exercise13 />
                <hr />
                <Exercise22 name="John Doe" />
                <hr />
                <Exercise23 />
            </div>
        </div>
    );
}