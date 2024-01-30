// import { useState } from "react";

// export const Counter = () => {
//   const [count, setcount] = useState(0);
//   const operation = (value) => {
//     setcount(value + count);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>operation(1)}>Add</button>
//       <button onClick={()=>operation(-1)}>sub</button>
//     </div>
//   );
// };

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDisable, setIsDisable] = useState(true);

  const updateCount = (num) => {
    if (num === -1 && count === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
      setCount(num + count);
    }
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => updateCount(1)}>Add +</button>
      <button disabled={isDisable} onClick={() => updateCount(-1)}>
        sub -
      </button>
    </>
  );
};
