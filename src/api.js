var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Base URL for the PRH API and the companies endpoint.
const BASE_URL = "https://avoindata.prh.fi/opendata-ytj-api/v3"; // Base URL of the API.
const API_URL = "/companies"; // Endpoint for fetching company data.
/**
 * Fetch companies based on search parameters.
 * @param searchParams - The search parameters to filter companies.
 * @returns FetchCompaniesResponse or null if error.
 */
export const fetchCompanies = (searchParams) => __awaiter(void 0, void 0, void 0, function* () {
    // Build query string from search parameters and default page to 1 if not provided.
    const queryString = new URLSearchParams(Object.assign(Object.assign({}, searchParams), { page: searchParams.page || '1' })).toString();
    // Construct the full API URL.
    const apiUrl = `${BASE_URL}${API_URL}?${queryString}`;
    try {
        // Fetch data from the API.
        const response = yield fetch(apiUrl);
        // Check if the response status is OK (200-299 range).
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check if the response content type is JSON.
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            const data = yield response.json();
            return data; // Return the parsed JSON data.
        }
        else {
            // Handle the case where response isn't JSON.
            throw new Error("Expected JSON response, but got " + contentType);
        }
    }
    catch (error) {
        // Log any errors and return null.
        console.error("Error fetching data:", error);
        return null;
    }
});
