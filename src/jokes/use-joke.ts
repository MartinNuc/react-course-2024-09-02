import axios from "axios";
import { useState, useEffect, useCallback } from "react";

type JokeResponse = {
  value: string;
};

export function useJoke() {
  const [jokes, setJokes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = useCallback(async function fetchJoke() {
    setIsLoading(true);
    const response = await axios.get<JokeResponse>(
      "https://api.chucknorris.io/jokes/random"
    );
    setJokes((jokes) => [...jokes, response.data.value]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const joke = jokes[jokes.length - 1];

  return { joke, isLoading, fetchJoke };
}
