// src/components/ServicesContentUI.jsx
import React from "react";
import { services } from "../data/service/services.json";
import "./style/ServicesContentUI.css";

const ServicesContentUI = () => {
  return (
    <section className="services-content-section">
      <div className="container">
        <div className="services-header">
          <h2>Our Core Growth Services</h2>
          <p>
            Performance-driven solutions designed to scale revenue,
            visibility, and long-term brand authority.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 className="service-title">{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <ul className="service-points">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContentUI;
