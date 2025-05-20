//-- react root creation 
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));


// -- variable Area 
let score = 0;
let wicket = 0;


// -- function area -- 
function addScore(num) {
  if(wicket<10){
    score += num; // re-render updatedscore
    ReactRoot.render(<App />);
  }
}

function addWicket(){
  if(wicket <10){
    wicket++;
    ReactRoot.render(<App />);
  }
  
}


// -- Component area -- 
function ButtonElementComponent()
{
  return (
    <>
      <div className="button">
        <button onClick={()=>{addScore(1)}}>1</button>
        <button onClick={()=>{addScore(2)}}>2</button>
        <button onClick={()=>{addScore(3)}}>3</button>
        <button onClick={()=>{addScore(4)}}>4</button>
        <button onClick={()=>{addScore(5)}}>5</button>
        <button onClick={()=>{addScore(6)}}>6</button>
        <button onClick={addWicket}>Wicket</button>
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