import { Company } from "../api";

// Props for the ResultsTable component.
interface ResultsTableProps {
  results: Company[]; // Array of companies to display in the table.
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {

    // Check if results are empty; if so, don't render the table
    if (results.length === 0) {
      return null; // Return nothing, effectively hiding the table
    }
    
    return (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Business ID</th>
        <th>Post Code</th>
        <th>Registration Date</th>
      </tr>
    </thead>
    <tbody>
      {results.map((company, index) => {
        return (
          <tr key={`${company.businessId}-${index}`}>
            {/* Display the first name in the names array or "N/A" if no names exist. */}
            <td>{company.names ? company.names[0].name : "N/A"}</td> 
            
            {/* Display business ID value or "N/A" if no businessId. */}
            <td>{company.businessId ? company.businessId.value : "N/A"}</td>
            
            {/* TODO There is a lot of address info in variations. Get proper address instead of postCode if available. */}
            {/* Display the first postCode from the addresses array or "N/A" if no address. */}
            <td>{company.addresses ? company.addresses[0].postCode : "N/A"}</td> 

            {/* Display the registration date or "N/A" if not available. */}
            <td>{company.registrationDate ? company.registrationDate : "N/A"}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
    );
};

export default ResultsTable;