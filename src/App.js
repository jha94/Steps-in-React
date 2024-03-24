import { lazy, Suspense } from 'react';
import './App.css';

function App() {
  const Steps = lazy(()=>import('./steps/Steps'));

  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>} >
        <Steps/>
      </Suspense>
    </div>
  );
}

export default App;
