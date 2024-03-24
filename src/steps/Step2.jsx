import React, {useContext} from 'react';
import { Context } from './Context';

const Step2 = () => {
    const {wallet, price} = useContext(Context);
  return (
    <div>
        <div>Wallet balance: {wallet}</div>
        <div>price: {price}</div>
    </div>
  )
}

export default Step2