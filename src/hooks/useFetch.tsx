import { useState, useEffect } from "react";
type ObjArrOrNull = object[] | null;
type StrOrBoolen = string | boolean;
type StrOrNull = string | null;
type Object = object;

function useFetch(url: string, method: string = "GET") {
  const [data, setData] = useState<ObjArrOrNull>(null);
  const [isPending, setIsPending] = useState<StrOrBoolen>(false);
  const [error, setError] = useState<StrOrNull>(null);

  const [fetchOptions, setFetchOption] = useState<Object>({});
  const addNewPost = (newPost: object) => {
    setFetchOption({
      method: "Post",
      headers: {
        "Content-Type": "appliccation/json",
      },
      body: JSON.stringify(newPost),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchOptions?: object) => {
      setIsPending(true);
      try {
        const req = await fetch(url, {
          ...fetchOptions,
        });
        if (!req.ok) {
          throw new Error("Error!");
        }
        const data = await req.json();
        setData(data);
        setError(error);
        setIsPending(isPending);
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    };
    if (fetchOptions && method == "POST") {
      fetchData(fetchOptions);
    }
    if (method == "GET") {
      fetchData();
    }
  }, [url, method, fetchOptions]);
  return { data, isPending, error, addNewPost };
}

export default useFetch;
