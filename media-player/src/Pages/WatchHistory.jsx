import React from 'react';
import { Link } from 'react-router-dom';

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch-History <i className="fa-solid fa-clock-rotate-left fa-xl"></i></h2>
        <Link style={{ textDecoration: 'none' }} to="/home">
          <h3>Back To Home <i className="fa-solid fa-rotate-left fa-xl"></i></h3>
        </Link>
      </div>
      <div className="container mt-5 mb-3 w-100">
        <table className="table shadow w-100 p-3 m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video url</th>
              <th>Time stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>video</td>
              <td>
                <a href="https://youtu.be/e_lJYRaMo60?si=FmGzg2wSWwaBYREz" target="_blank" rel="noopener noreferrer">
                  https://youtu.be/e_lJYRaMo60?si=FmGzg2wSWwaBYREz
                </a>
              </td>
              <td>01.23,29/10/2024</td>
              <td>
                <button className="text-danger btn">
                  <i className="fa-solid fa-trash" style={{ color: '#eb5e00' }}></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
