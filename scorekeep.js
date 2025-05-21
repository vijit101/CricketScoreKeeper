//-- react root creation 
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));


// -- variable Area 
let score = 0;
let wicket = 0;
let ballWiseScoreArr = [];
let printable = null;


// -- function area -- 
function addScore(num) {
  if(wicket<10){
    ballWiseScoreArr.push(num);
    score += num; // re-render updatedscore
    document.querySelector(".runinput").value = num; // update value in input 
    ReactRoot.render(<App />);
    //console.log(ballWiseScoreArr);
  }
}

function addWicket(){
  if(wicket <10){
    ballWiseScoreArr.push("W");
    wicket++;
    document.querySelector(".runinput").value = num;
    ReactRoot.render(<App />);
    //console.log(ballWiseScoreArr);
  }
  
}

function SubmitComment(){
  let commentElem = document.querySelector(".commentinput");
  let runElem = document.querySelector(".runinput");
  printable = `runs ${runElem.value} , Comment ${commentElem.value}`;
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
      <input type="number" className="runinput" disabled/>
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
      {printable != null ? <><p>{printable}</p><br/></>:null}
    </>
  );
};

// -- first render 
ReactRoot.render(<App/>);