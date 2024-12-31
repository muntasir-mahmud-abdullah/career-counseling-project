import React from "react";
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;