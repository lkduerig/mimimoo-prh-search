import React from "react";

// Declare the SearchForm component props interface
export interface SearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

// Declare the SearchForm component
declare const SearchForm: React.FC<SearchFormProps>;

export default SearchForm;