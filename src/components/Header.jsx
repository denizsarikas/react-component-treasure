import React from "react";

function Header() {
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-50">
  <div className="flex flex-wrap items-center justify-between">
    <div className="w-full sm:w-auto mb-4 sm:mb-0">birinci kısım</div>
    <div className="w-full sm:w-auto">ikinci kısım</div>
    <div className="w-full sm:w-auto">ucuncu kısım</div>
    <div className="w-full sm:w-auto">dorduncu kısım</div>
  </div>
      <div className="flex items-center justify-between">
        <a href="index.html" className="">
          <h1>
            UpConstruction<span>.</span>
          </h1>
        </a>
        <i className=""></i>
        <i className=""></i>
        <div id="navbar" className="flex flex-col sm:flex-row">
          <ul className="flex flex-col sm:flex-row">
            <li className="flex-none py-2 sm:py-0">
              <a href="index.html" className="px-4">
                Home
              </a>
            </li>
            <li className="flex-none py-2 sm:py-0">
              <a href="about.html" className="px-4">
                About
              </a>
            </li>
            <li className="flex-none py-2 sm:py-0">
              <a href="services.html" className="px-4">
                Services
              </a>
            </li>
            <li className="flex-none py-2 sm:py-0">
              <a href="projects.html" className="px-4">
                Projects
              </a>
            </li>
            <li className="flex-none py-2 sm:py-0">
              <a href="blog.html" className="px-4">
                Blog
              </a>
            </li>
            <li className="flex-none py-2 sm:py-0">
              <a href="contact.html" className="px-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
