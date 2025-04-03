import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  // Using a single state object for all form fields.
  const [formData, setFormData] = useState({
    location: "",
    businessId: "",
    registrationDateStart: "",
    registrationDateEnd: "",
  });

  // Generic handleChange for any form input.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove empty fields from search parameters.
    const filteredParams = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  // Handle clearing the form.
  const handleClear = () => {
    setFormData({
      location: "",
      businessId: "",
      registrationDateStart: "",
      registrationDateEnd: "",
    });
    onSearch({}); // Reset the search results when the form is cleared.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="businessId"
        value={formData.businessId}
        onChange={handleChange}
        placeholder="Business ID"
      />
      <input
        type="text"
        name="registrationDateStart"
        value={formData.registrationDateStart}
        onChange={handleChange}
        placeholder="Registration starting (YYYY-MM-DD)"
      />
      <input
        type="text"
        name="registrationDateEnd"
        value={formData.registrationDateEnd}
        onChange={handleChange}
        placeholder="Registration ending (YYYY-MM-DD)"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default SearchForm;