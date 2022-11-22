import { useEffect, useState } from "react";

//always create hooks with function name starting with hook
//hook shares the logic and states accorss components
//each time you use this hook in components, the states used here are registered for that component
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
