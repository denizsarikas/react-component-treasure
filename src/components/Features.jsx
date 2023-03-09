import { useState } from "react";

import img1 from "../img/features-1.jpg";
import img2 from "../img/features-2.jpg";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section id="features" className="features section-bg m-5">
      <div className="container" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-8">
          <button
            className={`${
              activeTab === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            } py-3 rounded-tl-lg rounded-tr-lg`}
            onClick={() => handleTabClick(1)}
          >
            <h4>Modisit</h4>
          </button>
          <button
            className={`${
              activeTab === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
            } py-3 rounded-tr-lg rounded-tl-lg`}
            onClick={() => handleTabClick(2)}
          >
            <h4>Praesenti</h4>
          </button>
          <div className="p-6 col-span-2">
            {activeTab === 1 && (
              <div className="grid grid-cols-2 gap-8">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="italic">
                    Lorem ipsum dolor situt labore et dolore
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullauat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis at.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ulpariatur.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="grid grid-cols-2 gap-8">
                <div data-aos="fade-up" data-aos-delay="100">
                  <h3>Neque exercitationem debitis</h3>
                  <p className="italic">Lorem ipor</p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco la.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Dvelit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Prov.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullam.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <img src={img2} alt="" className="img-fluid" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
