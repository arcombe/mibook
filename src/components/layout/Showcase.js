import React from 'react';
import book from '../../img/book.png';

export default function Showcase() {
  return (
    <section id="showcase" className="py-5">
      <div className="primary-overlay text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <h1 className="display-2 mt-5 pt-5">Do What You Dream Of...</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                tempora!
              </p>
              <a
                href="#"
                className="btn btn-outline-secondary btn-lg text-white"
              >
                <i className="fas fa-arrow-right"></i> Read More
              </a>
            </div>
            <div className="col-lg-6">
              <img src={book} alt="" className="img-fluid d-none d-lg-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
