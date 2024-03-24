import React, {useContext} from 'react';
import { Context } from './Context';

const Step4 = () => {
    const {name, price, wallet} = useContext(Context);
  return (
    <div>
        Details:-
        <br/>
        <div>Item: {name}</div>
        <div>Price: {price}</div>
        <div>Updated Wallet Balance: {wallet-price}</div>
    </div>
  )
}

export default Step4