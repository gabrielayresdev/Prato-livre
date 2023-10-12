import React from "react";

function useFetch<T>(url: string | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function request() {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });

        if (!response.ok) {
          const json = await response.json();
          const e = new Error();
          e.message = json;
          e.name = JSON.stringify(response.status);
          throw e;
        }

        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (err) {
        if (!signal.aborted && err instanceof Error) setError(err);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    request();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
