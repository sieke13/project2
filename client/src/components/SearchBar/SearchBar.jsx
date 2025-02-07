import React, { useState } from 'react';
import '../../styles/styles.css';
import wikipediaLogo from "../../assets/wikipedia.svg";

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data.query.search);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center border p-2 rounded" style={{ background: "#f8f9fa", maxWidth: "600px", margin: "0 auto" }}>
        <img src={wikipediaLogo} alt="Wikipedia Logo" style={{ height: "40px", marginRight: "10px" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Wikipedia"
          className="p-2 border rounded flex-grow-1"
          style={{ width: "100%" }}
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4 space-y-2">
        {results.map((result) => (
          <li key={result.pageid} className="border p-3 rounded shadow-sm">
            <a
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold"
            >
              {result.title}
            </a>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;