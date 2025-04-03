import { Company } from "../api";

// Declare the ResultsTable component props interface
export interface ResultsTableProps {
  results: Company[];
}

// Declare the ResultsTable component
declare const ResultsTable: React.FC<ResultsTableProps>;

export default ResultsTable;