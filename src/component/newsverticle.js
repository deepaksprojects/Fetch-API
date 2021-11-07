import React, { useEffect, useState } from "react";
import "./style.css";
import Pagination from "./pagination";

const Newsverticle = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [frame, setFrame] = useState("close");

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setUser(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  //pagination
  const pageNumber = [];

  for (let i = 1; i <= 3; i++) {
    pageNumber.push(i);
  }

  // get Current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);

  // changePage
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // function
  const handlePrev = () => {
    const page = currentPage - 1;
    setCurrentPage(page);
  };
  const handleNext = () => {
    const page = currentPage + 1;
    setCurrentPage(page);
  };
  const handleDelete = (index) => {
    const newItem = user.filter((curEle) => {
      return curEle.id != index;
    });
    setUser(newItem);
  };
  return (
    <>
      {frame === "open" && (
        <div className="web-div" onClick={() => setFrame("close")}>
          <div className="web-c-div">
            <iframe src="" frameborder="0" width="100%" height="100%"></iframe>
            <img src="" alt="" />
          </div>
        </div>
      )}
      <div>
        <div className="news-div-2">
          {currentPosts.map((curEle) => {
            return (
              <div>
                <div className="img-div-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="rgba(240, 0, 0, 0.25)"
                    onClick={() => handleDelete(curEle.id)}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </div>
                <div className="news-c-div-2" key={curEle.id} 
                onClick={() => setFrame("open")}>
                  <h1>{curEle.title}</h1>
                  <p>{curEle.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Pagination
          currentPage={currentPage}
          handlePrev={handlePrev}
          handleNext={handleNext}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Newsverticle;
