// TODO Delete this file if not in use.

// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from 'react';
// import SearchForm from './components/SearchForm';
// import ResultsTable from './components/ResultsTable';
// import { fetchCompanies } from './api';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css';
// const App = () => {
//     const [results, setResults] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(1);
//     const [params, setParams] = useState({});
//     const [loading, setLoading] = useState(false);
//     const handlePageChange = (params, page) => {
//         setCurrentPage(page);
//         handleSearch(Object.assign(Object.assign({}, params), { page: page.toString() }));
//     };
//     const handleSearch = (params) => __awaiter(void 0, void 0, void 0, function* () {
//         setLoading(true);
//         setParams(params);
//         try {
//             const data = yield fetchCompanies(params);
//             if (data && data.companies && Array.isArray(data.companies)) {
//                 setResults(data.companies);
//                 if (data.totalResults) {
//                     setTotalResults(data.totalResults);
//                 }
//             }
//             else {
//                 console.error("Unexpected data structure", data);
//                 setResults([]); // ✅ Fallback to prevent crashes
//             }
//         }
//         catch (error) {
//             console.error("Error fetching data", error);
//             setResults([]); // ✅ Ensure state is always an array
//         }
//         finally {
//             setLoading(false);
//         }
//     });
//     return (_jsxs("div", { children: [_jsx("h1", { children: "Company Search" }), _jsx(SearchForm, { onSearch: handleSearch }), _jsx(ResultsTable, { results: results }), loading && _jsx("p", { children: "Loading..." }), _jsxs("div", { className: "pagination", children: [_jsx("button", { onClick: () => handlePageChange({ location: "Helsinki" }, currentPage - 1), disabled: currentPage === 1, children: "Previous" }), _jsxs("span", { children: ["Page ", currentPage, " of ", Math.ceil(totalResults / 100)] }), _jsx("button", { onClick: () => handlePageChange(params, currentPage + 1), disabled: currentPage * 100 >= totalResults, children: "Next" })] }), _jsxs("div", { className: "counter", children: [totalResults, " results"] })] }));
// };
// export default App;
