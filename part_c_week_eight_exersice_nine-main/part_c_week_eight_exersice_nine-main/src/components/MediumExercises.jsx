import React from 'react';

// Exercise 6
export function Exercise6() {
    // JSX версия
    const elementJSX = (
        <div className="card">
            <h2>Profile</h2>
            <p>Welcome to your profile page.</p>
        </div>
    );

    // React.createElement версия
    const elementReact = React.createElement(
        'div',
        { className: 'card' },
        React.createElement('h2', null, 'Profile'),
        React.createElement('p', null, 'Welcome to your profile page.')
    );

    return (
        <div>
            <h3>Exercise 6: JSX vs React.createElement</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <h4>JSX Version:</h4>
                    {elementJSX}
                </div>
                <div>
                    <h4>React.createElement Version:</h4>
                    {elementReact}
                </div>
            </div>
        </div>
    );
}

// Exercise 7
export function Exercise7({ name, group }) {
    return (
        <div>
            <h3>Exercise 7: Using Props in JSX</h3>
            <div className="student-card">
                <h3>{name}</h3>
                <p>Group: {group}</p>
            </div>
        </div>
    );
}

// Exercise 8
export function Exercise8({ title, credits }) {
    return (
        <div>
            <h3>Exercise 8: Destructuring Props</h3>
            <div>
                <h2>{title}</h2>
                <p>Credits: {credits}</p>
            </div>
        </div>
    );
}

// Exercise 9
export function Exercise9({ isOnline }) {
    return (
        <div>
            <h3>Exercise 9: Conditional Rendering with Ternary</h3>
            {isOnline ? <p>Online</p> : <p>Offline</p>}
        </div>
    );
}

// Exercise 10
export function Exercise10({ count }) {
    return (
        <div>
            <h3>Exercise 10: Conditional Rendering with &&</h3>
            <h2>Notifications</h2>
            {count > 0 && <p>You have {count} new notifications</p>}
        </div>
    );
}

// Exercise 11
export function Exercise11({ tasks }) {
    return (
        <div>
            <h3>Exercise 11: Rendering Lists with Keys</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
}

// Exercise 14
export function Exercise14() {
    function handleSelect(id) {
        console.log("Selected id:", id);
    }

    return (
        <div>
            <h3>Exercise 14: Passing Arguments to Handlers</h3>
            <button onClick={() => handleSelect(5)}>
                Select student
            </button>
        </div>
    );
}

// Exercise 15
export function Exercise15() {
    return (
        <div>
            <h3>Exercise 15: Inline Styles</h3>
            <div style={{
                backgroundColor: 'yellow',
                padding: '10px',
                borderRadius: '5px'
            }}>
                Warning!
            </div>
        </div>
    );
}

// Exercise 16
export function Exercise16() {
    return (
        <>
            <h3>Exercise 16: Fragments</h3>
            <h2>About the course</h2>
            <p>This course teaches React basics.</p>
        </>
    );
}

// Exercise 17
export function Card({ title, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-body">{children}</div>
        </div>
    );
}

export function Exercise17() {
    return (
        <div>
            <h3>Exercise 17: Children Prop</h3>
            <Card title="JSX Topic">
                <p>We are learning JSX today.</p>
            </Card>
        </div>
    );
}

// Exercise 18
const user = {
    name: "Aida",
    age: 19,
    group: "FE-01"
};

export function UserProfile({ name, age, group }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h4>User Profile</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Group: {group}</p>
        </div>
    );
}

export function Exercise18() {
    return (
        <div>
            <h3>Exercise 18: Spread Props</h3>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <h4>With Spread Props:</h4>
                    <UserProfile {...user} />
                </div>
                <div>
                    <h4>With Explicit Props:</h4>
                    <UserProfile
                        name={user.name}
                        age={user.age}
                        group={user.group}
                    />
                </div>
            </div>
        </div>
    );
}

// Exercise 19
export function Exercise19({ isAdmin }) {
    return (
        <div>
            <h3>Exercise 19: Expressions vs Statements</h3>
            <div>
                {isAdmin ? (
                    <p>Welcome, admin!</p>
                ) : (
                    <p>Access denied</p>
                )}
            </div>
        </div>
    );
}

// Exercise 20
export function Exercise20() {
    const [name, setName] = React.useState("");

    return (
        <div>
            <h3>Exercise 20: Controlled Input</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name}</p>
        </div>
    );
}

// Exercise 24
export function Exercise24({ user, notifications }) {
    return (
        <div>
            <h3>Exercise 24: Complex JSX Formatting</h3>
            <div>
                <h1>{user.name}'s Dashboard</h1>
                {notifications.length > 0 && (
                    <p>You have {notifications.length} new notifications.</p>
                )}
            </div>
        </div>
    );
}

// Exercise 25
export function Exercise25() {
    const a = 2;
    const b = 3;

    return (
        <div>
            <h3>Exercise 25: Predict the Rendered Output</h3>
            <div style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                <p><strong>Answer:</strong></p>
                <p>First p: {a + b} (will render "5")</p>
                <p>Second p: {a > b ? "a is bigger" : "b is bigger or equal"} (will render "b is bigger or equal")</p>
                <p>Third p: {false && "This text"} (will render nothing/empty)</p>
            </div>
        </div>
    );
}

// Общий компонент для средних упражнений
export default function MediumExercises() {
    const tasks = [
        { id: 1, title: "Learn JSX" },
        { id: 2, title: "Practice React" },
        { id: 3, title: "Build project" }
    ];

    const sampleUser = { name: "John" };
    const notifications = ["Notification 1", "Notification 2"];

    return (
        <div className="exercises-section">
            <h2>Medium Level Exercises</h2>
            <div className="exercise-container">
                <Exercise6 />
                <hr />
                <Exercise7 name="Alice" group="CS-101" />
                <hr />
                <Exercise8 title="React Fundamentals" credits={3} />
                <hr />
                <Exercise9 isOnline={true} />
                <hr />
                <Exercise10 count={3} />
                <hr />
                <Exercise11 tasks={tasks} />
                <hr />
                <Exercise14 />
                <hr />
                <Exercise15 />
                <hr />
                <Exercise16 />
                <hr />
                <Exercise17 />
                <hr />
                <Exercise18 />
                <hr />
                <Exercise19 isAdmin={false} />
                <hr />
                <Exercise20 />
                <hr />
                <Exercise24 user={sampleUser} notifications={notifications} />
                <hr />
                <Exercise25 />
            </div>
        </div>
    );
}