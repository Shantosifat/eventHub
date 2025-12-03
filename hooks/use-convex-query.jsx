import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useConvexQuery = (query, ...args) => {
  const result = useQuery(query);

  const [data, setdata] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (result === undefined) {
      setIsLoading(true);
    } else {
      try {
        setdata(result);
        setError(null);
      } catch (err) {
        setError(err);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [result]);
  return { data, isLoading, error };
};

export const useConvexMutation = (mutation) => {
  const mutationFn = useMutation(query);

  const [data, setdata] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(...args);
      setdata(response);
      return response;
    } catch (err) {
      setError(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { mutate, data, isLoading, error };
};
