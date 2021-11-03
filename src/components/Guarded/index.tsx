import {FC, useCallback, useMemo, useState} from 'react';
//components
import Child from './Child';
import Pure from './Pure';
//styles
import "./Guarded.module.scss";

const arr = [1,2,3,4,5];

const Guarded: FC = () => {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const usingCallback = useCallback(number => changeChildNumber(number), []);
  const usingMemo = useMemo(() => getLargestNumber(), [arr]);

  function incrementLocal() {
    setLocalNumber(prev => prev + 1);
  }

  function changeChildNumber(number:number) {
    setChildNumber(number);
  }

  function getLargestNumber() {
    return Math.max(...arr);
  }

  return (
    <div>
      <Child changeNumber={usingCallback} number={childNumber}/>
      <button onClick={incrementLocal}>Click to increment</button>
      <h1>local: {localNumber}</h1>
      <h1>Largest(re-render only if arr change): {usingMemo}</h1>
      <Pure text={'Pure component change only when props changed'}/>
    </div>
  );
}


export default Guarded;
