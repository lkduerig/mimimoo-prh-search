// Base URL for the PRH API and the companies endpoint.
const BASE_URL = "https://avoindata.prh.fi/opendata-ytj-api/v3"; // Base URL of the API.
const API_URL = "/companies"; // Endpoint for fetching company data.

/**
 * Interface for a company object.
 */
export interface Company {
  name?: string;
  location?: string;
  registrationDateStart?: string;
  registrationDateEnd?: string;
  registrationDate?: string;
  names?: Array<{
    name: string;
    registrationDate: string;
  }>;
  businessId?: {
    registrationDate: string;
    value: string;
  };
  addresses?: Array<{
    postCode: string;
    registrationDate: string;
  }>;
}

/**
 * Response format for fetching companies.
 */
export interface FetchCompaniesResponse {
  totalResults: number; // Total number of results.
  companies: Company[]; // Array of companies.
}

/**
 * Fetch companies based on search parameters.
 * @param searchParams - The search parameters to filter companies.
 * @returns FetchCompaniesResponse or null if error.
 */
export const fetchCompanies = async (searchParams: Record<string, string>): Promise<FetchCompaniesResponse | null> => {
  // Build query string from search parameters and default page to 1 if not provided.
  const queryString = new URLSearchParams({
    ...searchParams,
    page: searchParams.page || '1',
  }).toString();

  // Construct the full API URL.
  const apiUrl = `${BASE_URL}${API_URL}?${queryString}`;

  try {
    // Fetch data from the API.
    const response = await fetch(apiUrl);

    // Check if the response status is OK (200-299 range).
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Check if the response content type is JSON.
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data as FetchCompaniesResponse; // Return the parsed JSON data.
    } else {
      // Handle the case where response isn't JSON.
      throw new Error("Expected JSON response, but got " + contentType);
    }
  } catch (error) {
    // Log any errors and return null.
    console.error("Error fetching data:", error);
    return null;
  }
};