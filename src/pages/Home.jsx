import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "./Testomonials";
import Faq from "./Faq";
import { Helmet } from "react-helmet";

const Home = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>CareerCounsel</title>
      </Helmet>
      <Slider />
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <Testimonials></Testimonials>
      <Faq></Faq>
    </div>
  );
};

export default Home;
