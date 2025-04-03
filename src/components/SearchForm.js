import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const SearchForm = ({ onSearch }) => {
    // Using a single state object for all form fields
    const [formData, setFormData] = useState({
        location: "",
        businessId: "",
        registrationDateStart: "",
        registrationDateEnd: "",
    });
    // Generic handleChange for any form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Remove empty fields from search parameters
        const filteredParams = Object.fromEntries(Object.entries(formData).filter(([_, value]) => value !== ""));
        onSearch(filteredParams);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "location", value: formData.location, onChange: handleChange, placeholder: "Search for a location" }), _jsx("input", { type: "text", name: "businessId", value: formData.businessId, onChange: handleChange, placeholder: "Search for a businessID" }), _jsx("input", { type: "text", name: "registrationDateStart", value: formData.registrationDateStart, onChange: handleChange, placeholder: "Search for a registrationStartDate" }), _jsx("input", { type: "text", name: "registrationDateEnd", value: formData.registrationDateEnd, onChange: handleChange, placeholder: "Search for a registrationDateEnd" }), _jsx("button", { type: "submit", children: "Search" })] }));
};
export default SearchForm;
