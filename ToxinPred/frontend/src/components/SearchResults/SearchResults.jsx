import { useState, useEffect } from "react";
import { Pagination, Table, Alert } from "react-bootstrap";
import './SearchResults.css';

const SearchResults = ({ result }) => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset the error state when a new result is provided
    setError(null);
  }, [result]);

  // Error checking function to ensure result data is valid
  const isValidResult = (result) => {
    if (!result || !result.type) {
      return false;
    }

    if (result.type !== "single" && (!result.value || !Array.isArray(result.value))) {
      return false;
    }

    if (result.type === "single" && (!result.value || !result.value.properties || !result.value.image)) {
      return false;
    }

    return true;
  };

  // If result is invalid, set an error
  useEffect(() => {
    if (!isValidResult(result)) {
      setError("Invalid result data. Please try again.");
    }
  }, [result]);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Determine the items to show based on the current page
  const paginatedItems = result && result.type !== "single"
    ? result.value.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
    : []; // Use an empty array if result.type is "single" or invalid

  const totalPages = result && result.type !== "single"
    ? Math.ceil(result.value.length / itemsPerPage)
    : 1; // Set totalPages to 1 if result.type is "single" or invalid

  const renderPagination = () => (
    totalPages > 1 && (
      <Pagination className="justify-content-center">
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, pageIndex) => (
          <Pagination.Item
            key={pageIndex + 1}
            active={pageIndex + 1 === currentPage}
            onClick={() => handlePageChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    )
  );

  const renderPropertiesTable = (properties) => (
    <Table striped bordered hover size="sm" className="properties-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {properties && Object.entries(properties).map(([key, value], index) => (
          <tr key={index}>
            <td><strong>{key}</strong></td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderResultTable = (items) => (
    <Table striped bordered hover className="results-table">
      <thead>
        <tr>
          <th>#</th>
          <th>SMILES</th>
          <th>Properties</th>
          <th>Molecule Image</th>
        </tr>
      </thead>
      <tbody>
        {items && items.map((item, index) => (
          <tr key={index}>
            <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
            <td>{item.smiles || `SMILES ${(currentPage - 1) * itemsPerPage + index + 1}`}</td>
            <td>{item.properties ? renderPropertiesTable(item.properties) : "N/A"}</td>
            <td>
              {item.image ? (
                <img
                  src={item.image}
                  alt={`Molecule ${(currentPage - 1) * itemsPerPage + index + 1}`}
                  className="molecule-image"
                />
              ) : "No Image Available"}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  if (error) {
    return <Alert variant="danger" className="mt-3 text-center">{error}</Alert>;
  }

  return (
    <div className="results-container">
      {result && result.type === "batch" && (
        <div>
          <h4 className="text-center">Batch Results</h4>
          {paginatedItems.length > 0 ? renderResultTable(paginatedItems) : <p>No results available</p>}
          {renderPagination()}
        </div>
      )}

      {result && result.type === "miniBatch" && (
        <div>
          <h4 className="text-center">Mini-Batch Results</h4>
          {paginatedItems.length > 0 ? renderResultTable(paginatedItems) : <p>No results available</p>}
          {renderPagination()}
        </div>
      )}

      {result && result.type === "single" && (
        <div className="single-result">
          <h4>Properties</h4>
          {result.value.properties ? renderPropertiesTable(result.value.properties) : <p>No properties available</p>}
          <h4>Molecule Image</h4>
          {result.value.image ? (
            <img src={result.value.image} alt="Molecule" className="single-molecule-image" />
          ) : <p>No image available</p>}
        </div>
      )}

      {result && result.type === "drawing" && (
        <div className="drawing-result">
          <h4>Properties</h4>
          {result.value.properties ? renderPropertiesTable(result.value.properties) : <p>No properties available</p>}
          <h4>Molecule Image</h4>
          {result.value.image ? (
            <img src={result.value.image} alt="Molecule" className="drawing-molecule-image" />
          ) : <p>No image available</p>}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
