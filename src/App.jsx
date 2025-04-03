import { useState } from "react";
import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";
import { fetchCompanies } from "./api";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (params) => {
    try {
      const data = await fetchCompanies(params);
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <h1>Company Search</h1>
      <SearchForm onSearch={handleSearch} />
      <ResultsTable results={results} />
    </div>
  );
}

export default App;