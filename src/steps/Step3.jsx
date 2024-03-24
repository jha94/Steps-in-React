import React, {useContext} from 'react';
import { Context } from './Context';

const Step3 = () => {
    const {wallet, price} = useContext(Context);
  return (
    <div>
        Updated Wallet Balance : {wallet-price}
    </div>
  )
}

export default Step3