//-- react root creation 
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));


// -- variable Area 
let score = 0;
let wicket = 0;
let ballWiseScoreArr = [];
let hit = 0;

// -- function area -- 
function addScore(num) {
  hit = num;
  ReactRoot.render(<App/>);
}

function addWicket(){
  hit = "W";
  ReactRoot.render(<App/>);
}

function SubmitComment(){
  ReactRoot.render(<App/>);
}

function handleSubmit(event){
  event.preventDefault();
}



// -- Component area -- 
function ScoreButtonsComponent()
{
  return (
    <>
      <div className="button">
        <button onClick={()=>{addScore(0)}}>0</button>
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

function BallvsRunsTableComponent() {
  return (
    <div>
      {ballWiseScoreArr.map((res, index) => {
        return (
          <>
            {index % 6 === 0 ? <br /> : null}
            <span key={index}> {res ===0?".":res} </span> 
            &nbsp; &nbsp; &nbsp;
          </>
        );
      })}
    </div>
  );
}

function FormComponent(){
  return(
  <>
  <div>
    <form action={handleSubmit}>
      <input type="number" className="runinput" value = {hit} disabled/>
      <input type="text" className="commentinput" placeholder="Add Comment"/>
      <button onClick={SubmitComment}>Submit</button>
    </form>
  </div>
  </>
  );
}


// -- main app 
const App = () => {
  return (
    <>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <ScoreButtonsComponent/>
      {/* <BallvsRunsTableComponent/> */}
      <br/>
      <FormComponent/>
      <hr/>
    </>
  );
};

// -- first render 
ReactRoot.render(<App/>);