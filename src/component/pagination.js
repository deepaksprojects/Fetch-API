import React from "react";
import "./style.css";

const Pagination = (props) => {
  return (
    <>
      <nav className="nav-m-div">
        <ul className="pagination nav-div">
          <li>
            <button
              onClick={props.handlePrev}
              disabled={props.currentPage === 1}
              className="nav-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="rgba(0, 0, 0, 0.3)"
              >
                <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
              </svg>
            </button>
          </li>
          {props.pageNumber.map((number) => (
            <li key={number} className="page-item ">
              <a
                href="!#"
                onClick={() => props.paginate(number)}
                className="page-link nav-li"
              >
                {number}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={props.handleNext}
              disabled={props.currentPage === 17}
              className="nav-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="rgba(0, 0, 0, 0.3)"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
