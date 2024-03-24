import React, {useContext} from 'react';
import { Context } from './Context';

const Step1 = () => {
    const {name, price} = useContext(Context);
    
  return (
    <>
    <div>Item: {name}</div>
    <div>Price: {price}</div>
    </>
  )
}

export default Step1