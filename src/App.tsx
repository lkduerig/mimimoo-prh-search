import { useState } from 'react';
import SearchForm from './components/SearchForm.tsx';
import ResultsTable from './components/ResultsTable.tsx';
import { fetchCompanies, Company } from './api';
import './App.css';

const App: React.FC = () => {
  // State variables to manage the results, page info, and loading state.
  const [results, setResults] = useState<Company[]>([]); // Stores the list of companies.
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page.
  const [totalResults, setTotalResults] = useState(1); // Total number of results from the API.
  const [params, setParams] = useState<Record<string, string>>({}); // Search parameters.
  const [loading, setLoading] = useState(false); // Tracks loading state.

  // Handles page changes and triggers a new search.
  const handlePageChange = (params: Record<string, string>, page: number) => {
    setCurrentPage(page); // Update the current page.
    handleSearch({ ...params, page: page.toString() }); // Trigger a new search with the updated page number.
  };

  // Handles the search functionality (fetches data based on the parameters).
  const handleSearch = async (params: Record<string, string>) => {

  if (Object.keys(params).length === 0) {
    setResults([]); // Explicitly reset results to an empty array when clearing.
    return;
  }

    setLoading(true); // Set loading state to true while fetching data.
    setParams(params); // Update search parameters.

    try {
      const data = await fetchCompanies(params); // Fetch data from the API.

      // Check if the data has the correct structure.
      if (data && data.companies && Array.isArray(data.companies)) {
        setResults(data.companies); // Set the fetched companies in the state.

        if (data.totalResults) {
          setTotalResults(data.totalResults); // Update total results count.
        }
      } else {
        console.error("Unexpected data structure", data);
        setResults([]); // Fallback in case of unexpected structure.
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setResults([]); // Ensure state is always an array even on error.
    } finally {
      setLoading(false); // Reset loading state after fetch completes.
    }
  };

  return (
    <div>
      <h1>Company Search</h1>
      <SearchForm onSearch={handleSearch} /> {/* Search form to trigger the search. */}
  
      {/* Conditionally render ResultsTable and pagination only when there are results */}
      {results.length > 0 && (
        <>
          <ResultsTable results={results} /> {/* Display the fetched results in a table. */}
  
          {/* Pagination controls */}
          <div className="pagination">
            <button
              onClick={() => handlePageChange(params, currentPage - 1)} // Use dynamic params for location.
              disabled={currentPage === 1} // Disable "Previous" button on the first page.
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(totalResults / 100)} {/* Display current page and total pages. */}
            </span>
            <button
              onClick={() => handlePageChange(params, currentPage + 1)} // Use dynamic params for location.
              disabled={currentPage * 100 >= totalResults} // Disable "Next" button if on the last page.
            >
              Next
            </button>
          </div>
  
          {/* Display total number of results */}
          <div className="counter">{totalResults} results</div>
        </>
      )}
  
      {/* Loading spinner */}
      {/* I did this on purpose. */}
      {loading && <div className="spinner-border" role="status"><span className="visually-hiddenx">Loading...</span></div>}
    </div>
  );
};

export default App;