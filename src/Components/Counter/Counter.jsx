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

  const updateCount = (num) => {
    setCount(num + count);
  };

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => updateCount(1)}>Add +</button>
      <button onClick={() => updateCount(-1)}>sub -</button>
    </>
  );
};
