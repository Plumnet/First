import { useEffect } from 'react'

function App() {

  useEffect(() => {

    console.log("レンダリングされた後に実行できるよ!")

  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
