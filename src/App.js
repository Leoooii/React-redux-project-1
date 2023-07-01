


function App() {
  let message= 'bye there';
  if(Math.random() > 0.5){
    message="hello there"
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <h2>My name is leo</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
