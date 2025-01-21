import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={service.image} alt={service.name} className="h-48 w-full object-cover" /></figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <div className="card-actions justify-end">
          <Link to={`service/${service.id}`}><button className="btn btn-primary">{service.button}</button></Link>  
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;