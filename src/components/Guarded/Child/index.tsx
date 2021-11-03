import { FC } from "react";

type ChildProps = {
  changeNumber: (number:number) => void;
  number: number;
}
const Child: FC<ChildProps> = (props) => {

  function changeNumber() {
    props.changeNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
}

export default Child;
