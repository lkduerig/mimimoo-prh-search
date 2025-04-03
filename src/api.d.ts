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
    totalResults: number;
    companies: Company[];
}
/**
 * Fetch companies based on search parameters.
 * @param searchParams - The search parameters to filter companies.
 * @returns FetchCompaniesResponse or null if error.
 */
export declare const fetchCompanies: (searchParams: Record<string, string>) => Promise<FetchCompaniesResponse | null>;
