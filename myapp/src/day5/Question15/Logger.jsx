import { useState } from "react";

const Logger = (WrappedComponent) => {
    const EnhancedComponent = () => {
        const [counter, setCounter] = useState(0);

        return <>
        {counter<5 &&  <WrappedComponent counter={counter} setCounter={setCounter}/>}
        </>;
    }
  return EnhancedComponent;
}

export default Logger