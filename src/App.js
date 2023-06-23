import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Redux </h1>
      <Counter />
    </div>
  );
}

const Counter = () => {
  return (
    <>
      <div className="container">
        <h2>Redux Incremnet/Decrement Counter</h2>
        <div className="main-container">
          <h5 classname="increment-btn">
            <span>+ </span>
          </h5>
          <input value="0" className="input-value" name="inputVal" />
          <h5 onClick={() => console.log("clicked")} classname="decrement-btn">
            <span>-</span>
          </h5>
        </div>
      </div>
    </>
  );
};
