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
      <div className="row mb-3">
        <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            // placeholder="Helsinki"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="businessId" className="col-sm-2 col-form-label">Business ID</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="businessId"
            value={formData.businessId}
            onChange={handleChange}
            // placeholder="Business ID"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="registrationDateStart" className="col-sm-2 col-form-label">Registration Date Start</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="registrationDateStart"
            value={formData.registrationDateStart}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="registrationDateEnd" className="col-sm-2 col-form-label">Registration Date End</label>
        <div className="col-sm-10">
          <input
            type="text"
            name="registrationDateEnd"
            value={formData.registrationDateEnd}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <button type="submit" className="btn btn-primary col-sm-2">Search</button>
        <button type="button" className="btn btn-secondary col-sm-2" onClick={handleClear}>
          Clear
        </button></div>
    </form>
  );
};

export default SearchForm;