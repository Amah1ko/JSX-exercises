import React from "react";


// A1 – Simple Heading


// JSX:
// const element = <h1>Hello, React!</h1>;

export const A1 = React.createElement("h1", null, "Hello, React!");



// A2 – Wrapper with Two Children
// JSX:
// const element = (
//   <div className="card">
//     <h2>Profile</h2>
//     <p>Welcome to your profile page.</p>
//   </div>
// );

export const A2 = React.createElement(
    "div",
    { className: "card" },
    React.createElement("h2", null, "Profile"),
    React.createElement("p", null, "Welcome to your profile page.")
);


// A3 – Using Variables Inside JSX


const name = "Nurlan";
const age = 42;

export const A3 = React.createElement(
    "p",
    null,
    `${name} is ${age} years old.`
);



// A4 – Component Return Value


// JSX:
// function Greeting({ name }) {
//   return (
//     <div className="greeting">
//       <h1>Hello, {name}!</h1>
//     </div>
//   );
// }

export function Greeting({ name }) {
    return React.createElement(
        "div",
        { className: "greeting" },
        React.createElement("h1", null, `Hello, ${name}!`)
    );
}



// A5 – List Rendering


const items = ["JSX", "Components", "Hooks"];

export function TopicList() {
    return React.createElement(
        "ul",
        null,
        items.map((topic, index) =>
            React.createElement("li", { key: index }, topic)
        )
    );
}



// A6 – Nested Components


// Button without JSX
export function Button({ label }) {
    return React.createElement("button", { className: "btn" }, label);
}

// App without JSX
export function AppNoJSX() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement("h1", null, "My App"),
        React.createElement(Button, { label: "Click me" })
    );
}


// ===========================
// A7 – Inline Styles
// ===========================

export const A7 = React.createElement(
    "div",
    { style: { padding: "10px", borderRadius: "8px" } },
    "Inline styled box"
);


// ===========================
// A8 – Fragment
// ===========================

export function Info() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement("h2", null, "Title"),
        React.createElement("p", null, "Description text here.")
    );
}
