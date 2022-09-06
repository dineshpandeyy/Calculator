function App() {
  const createDigits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="application">
      <div className="main">
        <div className="webview">
          <span>(0)</span> 0
        </div>
        <div className="total-operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="numbers">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
