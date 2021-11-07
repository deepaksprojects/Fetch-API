import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import "./style.css";

const News = () => {
  const [user, setUser] = useState([]);
  const [postPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [frame, setFrame] = useState("close");

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setUser(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <div className="news-div">
          {currentPosts.map((curEle) => {
            return (
              <div
                className="news-c-div"
                key={curEle.id}
                onClick={() => setFrame("open")}
              >
                <div className="img-div">
                  <img
                    src={process.env.PUBLIC_URL + "/images/close.svg"}
                    alt="close"
                    onClick={() => handleDelete(curEle.id)}
                  />
                </div>

                <h1>{curEle.title}</h1>
                <p>{curEle.body}</p>
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

export default News;
