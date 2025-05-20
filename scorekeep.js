//-- react root creation 
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));


// -- variable Area 
let score = 0;
let wicket = 0;


// -- function area -- 
function addOne() {
  score++; // re-render updatedscore
  ReactRoot.render(<App />);
}


// -- Component area -- 
function ButtonElementComponent()
{
  return (
    <>
      <div className="button">
        <button onClick={addOne}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Wicket</button>
      </div>
    </>
  );
};


// -- main app 
const App = () => {
  return (
    <>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <ButtonElementComponent/>
    </>
  );
};

// -- first render 
ReactRoot.render(<App/>);