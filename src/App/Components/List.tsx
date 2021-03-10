import { useState } from "react";
import { useActions } from "../Hooks/useActions";
import { useSelector } from "../Hooks/useSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepo } = useActions();

  const { data, loading, error } = useSelector((state) => state.reposirories);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepo(term);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        <ul>
          {loading ? (
            <h1>Loading</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            data.map((x: string) => <li key={x}>{x}</li>)
          )}
        </ul>
      </form>
    </>
  );
};

export default RepositoriesList;
