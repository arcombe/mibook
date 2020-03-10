import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="main-footer" class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-6 ml-auto">
            <p class="lead">Copyright &copy; {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
