import React, { useState } from "react";

interface SearchFormProps {
  onSearch: (params: Record<string, string>) => void;
}
// interface FormErrors {
//   location?: string;
//   businessId?: string;
//   registrationDateStart?: string;
//   registrationDateEnd?: string;
// }

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  // Using a single state object for all form fields.
  const [formData, setFormData] = useState({
    location: "",
    businessId: "",
    registrationDateStart: "",
    registrationDateEnd: "",
  });

  // const [errors, setErrors] = useState({
  //   location: "",
  //   businessId: "",
  //   registrationDateStart: "",
  //   registrationDateEnd: "",
  // });

  // Helper function to validate date format (YYYY-MM-DD)
  // const validateDate = (date: string) => {
  //   const regex = /^\d{4}-\d{2}-\d{2}$/;
  //   return regex.test(date);
  // };

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


    // Validate form data
    // const newErrors: FormErrors = {};

    // Validate date fields
    // if (formData.registrationDateStart && !validateDate(formData.registrationDateStart)) {
    //   newErrors.registrationDateStart = "Invalid date format. Use YYYY-MM-DD.";
    // }
    // if (formData.registrationDateEnd && !validateDate(formData.registrationDateEnd)) {
    //   newErrors.registrationDateEnd = "Invalid date format. Use YYYY-MM-DD.";
    // }
    
    // If errors exist, update the errors state and don't proceed with the search.
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }

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

      {/* Location field */}
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
      {/* {errors.location && <div className="text-danger">{errors.location}</div>} */}

      {/* Business ID field */}
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
      {/* {errors.businessId && <div className="text-danger">{errors.businessId}</div>} */}

      {/* Date fields */}
      <div className="row mb-3">
        <label htmlFor="registrationDateStart" className="col-sm-2 col-form-label">Registration Date Start</label>
        <div className="col-sm-10">
          <input
            type="date"
            name="registrationDateStart"
            value={formData.registrationDateStart}
            onChange={handleChange}
            // placeholder="YYYY-MM-DD"
            className="form-control"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="registrationDateEnd" className="col-sm-2 col-form-label">Registration Date End</label>
        <div className="col-sm-10">
          <input
            type="date"
            name="registrationDateEnd"
            value={formData.registrationDateEnd}
            onChange={handleChange}
            // placeholder="YYYY-MM-DD"
            className="form-control"
          />
        </div>
      </div>

      {/* Submit and Clear buttons */}
      <div className="row mb-3 gap-3">
        <button type="submit" className="btn btn-primary col-sm-2">Search</button>
        <button type="button" className="btn btn-secondary col-sm-2" onClick={handleClear}>
          Clear
        </button></div>
    </form>
  );
};

export default SearchForm;