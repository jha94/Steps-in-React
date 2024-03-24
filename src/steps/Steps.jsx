import React, {useState, lazy, Suspense} from 'react';
import './Steps.css';
import {Context} from './Context';

const Steps = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const Step1 = lazy(()=>import('./Step1'));
    const Step2 = lazy(()=>import('./Step2'));
    const Step3 = lazy(()=>import('./Step3'));
    const Step4 = lazy(()=>import('./Step4'));
    const Steps = [<Step1/>, <Step2/>, <Step3/>, <Step4/>];

  const getSteps = () => {
    let steps = [];
    for(let index=1;index<4;index++){
      steps.push(<div className='step' >
        <div className={currentStep>=index?'line colored':'line'} ></div>
        <div className={currentStep>=index?'circle colored':'circle'}>{index+1}</div>
        </div>)
    }
    return steps;
  }
  const data = {
    name:'Kurta',
    price:5000,
    wallet:50000
  }
  return (
    <div className='stepsWrapper'>
        <div className='stepsData' >
            <Context.Provider value={data}>
                <Suspense fallback={<p>Current Step loading...</p>}>
                    {Steps[currentStep]}
                </Suspense>
            </Context.Provider>
        </div>
        <div className='stepsIndicator'>
        <div className='circle colored' >1</div>
      {getSteps()}
      </div>
      <button disabled={currentStep===3} className='next' onClick={()=>{
        setCurrentStep(currentStep+1)
      }} >Next</button>
    </div>
  )
}

export default Steps