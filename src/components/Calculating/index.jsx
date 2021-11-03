import {useCallback, useMemo, useState} from 'react';
//components
import Child from './Child';
import Pure from './Pure';
//styles
import "./Calculating.module.scss";

const Calculating = () => {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([1,2,3,4,5]);

  const memoizedCallback = useCallback(number => changeChildNumber(number), []);
  const memoizedValue = useMemo(() => getLargestNumber(), [arr]);

  function incrementLocal() {
    setLocalNumber(prev => prev + 1);
  }

  function changeChildNumber(number) {
    setChildNumber(number);
  }

  function getLargestNumber() {
    console.log('Largest Number');
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([1,2,3,4,5]);
  }
  
  return (
    <div>
      <Child changeNumber={memoizedCallback} number={childNumber}/>
      <button onClick={incrementLocal}>Click to increment</button>
      <h1>local: {localNumber}</h1>
      <h1>Largest: {memoizedValue}</h1>
      <Pure />
    </div>
  );
}


export default Calculating;
