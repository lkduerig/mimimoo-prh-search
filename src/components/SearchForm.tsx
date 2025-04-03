import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  // Using a single state object for all form fields
  const [formData, setFormData] = useState({
    location: "",
    businessId: "",
    registrationDateStart: "",
    registrationDateEnd: "",
  });

  // Generic handleChange for any form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove empty fields from search parameters
    const filteredParams = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Search for a location"
      />
      <input
        type="text"
        name="businessId"
        value={formData.businessId}
        onChange={handleChange}
        placeholder="Search for a businessID"
      />
      <input
        type="text"
        name="registrationDateStart"
        value={formData.registrationDateStart}
        onChange={handleChange}
        placeholder="Search for a registrationStartDate"
      />
      <input
        type="text"
        name="registrationDateEnd"
        value={formData.registrationDateEnd}
        onChange={handleChange}
        placeholder="Search for a registrationDateEnd"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;