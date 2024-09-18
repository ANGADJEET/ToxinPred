import { useState, useEffect } from "react";
import { Pagination, Table, Alert, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./PredictionResults.css";

const Results = ({ result }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => setError(null), [result]);

  useEffect(() => {
    if (!isValidResult(result)) setError("Invalid result data. Please try again.");
  }, [result]);

  const isValidResult = (result) => {
    if (!result || !result.type) return false;
    if (result.type === "single" && (!result.value || !result.value.prediction)) return false;
    if (result.type !== "single" && (!result.value || !Array.isArray(result.value))) return false;
    return true;
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const paginatedItems = result?.type !== "single"
    ? result.value.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const totalPages = result?.type !== "single"
    ? Math.ceil(result.value.length / itemsPerPage)
    : 1;

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

  const truncateSMILES = (smiles, maxLength = 30) => (
    smiles.length > maxLength ? `${smiles.substring(0, maxLength)}...` : smiles
  );

  const renderResultTable = (items) => (
    <Table striped bordered hover className="results-table">
      <thead>
        <tr>
          <th className="narrow-column">#</th>
          <th>SMILES</th>
          <th>Prediction</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${index}`}>{item.smile}</Tooltip>}
              >
                <span>{truncateSMILES(item.smile)}</span>
              </OverlayTrigger>
            </td>
            <td>{item.prediction ? item.prediction : "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderResultType = (typeLabel, paginatedItems) => (
    <div>
      <h4 className="text-center">{typeLabel} Results</h4>
      {paginatedItems.length > 0 ? renderResultTable(paginatedItems) : <p>No results available</p>}
      {renderPagination()}
    </div>
  );

  const renderSingleOrDrawing = (smiles, prediction, label) => (
    <div className={`${label}-result`}>
      <h4>SMILES: {truncateSMILES(smiles)}</h4>
      <h4>Prediction: {prediction}</h4>
    </div>
  );

  if (error) return <Alert variant="danger" className="mt-3 text-center">{error}</Alert>;

  return (
    <div className="results-container">
      {result?.type === "batch" && renderResultType("Batch", paginatedItems)}
      {result?.type === "miniBatch" && renderResultType("Mini-Batch", paginatedItems)}
      {result?.type === "single" && renderSingleOrDrawing(result.smiles, result.value.prediction, "single")}
      {result?.type === "drawing" && renderSingleOrDrawing(result.smiles, result.value.prediction, "drawing")}
    </div>
  );
};

export default Results;
