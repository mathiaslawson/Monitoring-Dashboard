import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import movies from "./movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

const customStyles = {
  table: {
    styl: {
      border: "none", // Remove the border
      borderRadius: "0px", // Set border-radius to 0 for sharp edges
      padding: "10px", // Optional: Add padding for better visual appearance
    },
  },
  tableWrapper: {
    style: {
      display: "table",
      border: "none",
    },
  },

  rows: {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      fontFamily: "monospace",
      color: "gray",
      backgroundColor: "#080a0a",
      minHeight: "61px",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "#0c0f0f",
      },
    },
    denseStyle: {
      minHeight: "32px",
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      "&:nth-of-type(n)": {
        color: "black",
        backgroundColor: "",
        borderBottomColor: "magenta",
      },
    },
    highlightOnHoverStyle: {
      color: "gray",
      backgroundColor: "white",
      transitionDuration: "0.15s",
      transitionProperty: "background-color",
      borderBottomColor: "brown",
      outlineStyle: "solid",
      outlineWidth: "1px",
      outlineColor: "gold",
    },
    stripedStyle: {
      color: "green",
      backgroundColor: "yellow",
    },
  },
  expanderRow: {
    style: {
      color: "",
      backgroundColor: "blue",
    },
  },
  expanderCell: {
    style: {
      flex: "0 0 48px",
    },
  },
  expanderButton: {
    style: {
      color: "",
      fill: "green",
      backgroundColor: "transparent",
      borderRadius: "2px",
      transition: "0.25s",
      height: "100%",
      width: "100%",
      "&:hover:enabled": {
        cursor: "pointer",
      },
      "&:disabled": {
        color: "magenta",
      },
      "&:hover:not(:disabled)": {
        cursor: "pointer",
        backgroundColor: "magenta",
      },
      "&:focus": {
        outline: "none",
        backgroundColor: "magenta",
      },
      svg: {
        margin: "auto",
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: "#212727",
      color: "gray",
      fontFamily: "monospace",
      fontSize: "14px",
      // border: "1px solid #0c0f0f",
    },
  },
  stripedStyle: {
    color: "",
    backgroundColor: "green",
  },
  header: {
    style: {
      fontSize: "22px",
      backgroundColor: "#212727",
      minHeight: "56px",
      paddingLeft: "16px",
      paddingRight: "8px",
      border: "1px solid #0c0f0f ",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const columns = [
  {
    name: "Host",
    selector: (row) => <p style={{color: '#4694d2'}}>{row.host}t</p>,
    sortable: true,
  },

  {
    name: "Status",
    button: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "#00d084",
              color: "black",
              border: "none",
            }}
          >
            Healthy
          </button>
        </div>
      </div>
    ),
  },

  {
    name: "Agent policy",
    selector: (row) => row.agent_policy,
    sortable: true,
    right: true,
  },
  {
    name: "Version",
    selector: (row) => row.version,
    sortable: true,
    right: true,
  },
  {
    name: "Last activity",
    selector: (row) => row.last_activity,
    sortable: true,
    right: true,
  },
  {
    name: "Actions",
    selector: (row) => row.runtime,
    sortable: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn fs-3 mt-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              backgroundColor: "",
              color: "white",
              border: "none",
            }}
          >
           <i className="bx bx-dots-horizontal"></i>
          </button>
        </div>
      </div>
    ),
  },
];

const conditionalRowStyles = [
  {
    when: (row) => row.id % 2 === 0,
    style: {
      backgroundColor: "#212727", // Light color for even rows
      border: "1px solid black",
      borderRadius: "0px",
    },
  },
  {
    when: (row) => row.id % 2 !== 0,
    style: {
      backgroundColor: "#080a0a",
      borderRadius: "0px",
      border: "1px solid black", // White color for odd rows
    },
  },
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage,
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav style={{ background: "#333", color: "#fff" }}>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
            style={{ background: "#080a0a", color: "gray", border: "none" }}
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
                style={{ background: "#080a0a", color: "gray", border: "none" }}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item" style={{ backgroundColor: "darkred" }}>
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
            style={{ background: "#080a0a", color: "gray", border: "none" }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

function Agents() {
  return (
    <div className="p-2">
      <div
        className="card mt-2"
        style={{ border: "none ", borderRadius: "0px" }}
      >
        <DataTable
          //   title="Movies"
          columns={columns}
          data={movies}
          defaultSortFieldID={1}
          //   pagination
          //   paginationComponent={BootyPagination}
          //   selectableRows
          //   selectableRowsComponent={BootyCheckbox}

          customStyles={customStyles}
          //theme="solarized"
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </div>
  );
}

export default Agents;
