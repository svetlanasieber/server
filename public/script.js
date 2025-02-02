const domElement = document.getElementById('root');

const reactElement = React.createElement(
    'header',
    {},
    React.createElement('h1', {}, 'Hello from React Element'),
    React.createElement('h2', {}, 'The Best Framework Ever'),
    React.createElement('h3', {}, 'Ala-Bala')
);

// console.log(reactElement);

// const reactJsxElement = <header>
//     <h1>Hello From React JSX Element</h1>
//     <h2>The Best Framework Ever</h2>
//     <h3>Ala-Bala</h3>
// </header>

const reactJsxElement = (
    <header>
        <h1>Hello From React JSX Element</h1>
        <h2>The Best Framework Ever</h2>
        <h3>Ala-Bala</h3>
    </header>
);

// ReactDOM.render(reactElement, domElement);
ReactDOM.render(reactJsxElement, domElement);