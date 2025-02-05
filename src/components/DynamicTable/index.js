import React, { useState } from 'react';

const DynamicTable = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  
  // Corrigindo a lógica para exibir ações corretamente
  const showActions = props.showActions ?? true;

  if (!props.data || props.data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  const columns = Object.keys(props.data[0] || {});

  const filteredData = props.data.filter((row) =>
    columns.some(col =>
      row[col] && typeof row[col] === 'string' && row[col].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentData = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table className={props.className}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{props.headers?.[col] || col}</th>
            ))}
            {!showActions && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr 
              key={index} 
              onClick={() => showActions && props.onRowClick?.(row)} // Captura os dados da linha clicada
              style={showActions ? { cursor: 'pointer' } : {}}
            >
              {columns.map((col) => (
                <td key={col}>{typeof row[col] === 'object' ? JSON.stringify(row[col]) : row[col]}</td>
              ))}
              {!showActions && (
                <td>
                  <button onClick={(e) => { e.stopPropagation(); props.onEdit(row); }}>Editar</button>
                  <button onClick={(e) => { e.stopPropagation(); props.onDelete(row); }}>Excluir</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredData.length / productsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicTable;
