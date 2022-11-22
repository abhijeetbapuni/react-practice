import { useState } from "react";

//as we are doing get and post in the same project with similar states like error and loading, so we can create a custom hook to reuse the logic and states
const useHttp = (requestConfig, applyData) => {
  const { url, method, headers, body } = requestConfig;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return { isLoading, error, sendRequest }; //we can return anything value,array or objects etc
};

export default useHttp;
