import { useJoke } from "./use-joke";

export function Joke() {
  const { fetchJoke, isLoading, joke } = useJoke();

  return (
    <div>
      {joke}
      <button onClick={fetchJoke} disabled={isLoading}>
        {isLoading && "🕰️"} Next
      </button>
    </div>
  );
}
