import React, { useContext, useState, useEffect } from "react";
import RepoCard from "../RepoCard/RepoCard";
import context from "../../context/context";

const Repositories = () => {
  const { userRepos } = useContext(context);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const firstPage = currentPage * totalPage;
  const lastPage = firstPage - totalPage;
  const lastData = userRepos.slice(lastPage, firstPage);
  const paginate = (id) => {
    setCurrentPage(id);
  };
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(userRepos.length / totalPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              className="form-control py-0"
              placeholder="Enter name repositore"
            />
          </div>
          <div className="col-5 d-flex justify-content-between align-items-center">
            <select className="form-select py-0 w-50 ">
              <option selected disabled>
                Type
              </option>
              <option>Private</option>
              <option>Public</option>
            </select>
            <select className="form-select py-0 w-50 ms-1">
              <option selected disabled>
                Language
              </option>
              <option>Html</option>
              <option>CSS</option>
            </select>

            <select className="form-select py-0 w-50 mx-1">
              <option selected disabled>
                Sort
              </option>
              <option>Last updated</option>
              <option>Name</option>
            </select>
            <button className="btn btn-success py-1 fs-6 d-flex ">
              <i class="bi bi-journal-bookmark"></i>

              <span className="ms-1">New</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            {lastData.map((item, index) => {
              return <RepoCard data={item} key={index} />;
            })}
            <ul class="pagination pagination-sm">
              {pageNumber.map((pagen) => {
                return (
                  <>
                    <li
                      class="page-item active mx-3"
                      aria-current="page"
                      onClick={(e) => {
                        paginate(pagen);
                      }}
                    >
                      <span class="page-link">{pagen}</span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
