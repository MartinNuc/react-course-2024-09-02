import axios from "axios";
import { useEffect, useState } from "react";

type JokeResponse = {
  value: string;
};

export function Joke() {
  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    setIsLoading(true);
    const response = await axios.get<JokeResponse>(
      "https://api.chucknorris.io/jokes/random"
    );
    setJoke(response.data.value);
    setIsLoading(false);
  }

  return (
    <div>
      {joke}
      <button onClick={fetchJoke} disabled={isLoading}>
        {isLoading && "🕰️"} Next
      </button>
    </div>
  );
}
