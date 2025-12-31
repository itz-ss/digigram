// src/pages/ServicePage.jsx
import { useParams, Navigate } from "react-router-dom";
// import servicesData from "../data/service/services.json";
import "./style/ServicePage.css";

const ServicePage = () => {
  const { slug } = useParams();

  const service = servicesData.services.find(
    (s) => s.slug === slug
  );

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="service-page">

      {/* ===== BANNER SECTION ===== */}
      <div
        className="service-banner"
        style={{
          backgroundImage: `url(/assets/banner/banner.jpg)`
        }}
      >
        <div className="service-banner-overlay">
          <h1 className="service-banner-title">
            {/* {service.title} */}
          </h1>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="container">
       <div className="service-content-grid">

        {/* TEXT */}
        <div className="service-text">
          {/* <p className="service-description">{service.description}</p> */}

          {/* {service.points && (
            <ul className="service-points">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )} */}
        </div>

        {/* IMAGE */}
        {/* {service.image && (
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        )} */}

      </div>

      </div>

    </section>
  );
};

export default ServicePage;
