import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import servicesData from "../data/services.json";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  // const servicesData = useLoaderData();
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));
  
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="p-10">
{service && (
  <Helmet>
    <title>{service.name} - Career Counseling</title>
  </Helmet>
)}
      {console.log("Current Page Title: ", service ? service.name + " - Career Counseling" : "Service Not Found")}
      {service ? (
        <>
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 object-cover mb-5 rounded-lg"
          />
          <h1 className="text-3xl font-bold mb-5">{service.name}</h1>
          <p className="text-lg mb-3">{service.description}</p>
          <p className="mb-2">
            <strong>Category:</strong> {service.category}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> {service.price}
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> {service.duration}
          </p>
          <p className="mb-2">
            <strong>Counselor:</strong> {service.counselor}
          </p>
          <p className="mb-5">
            <strong>Rating:</strong> {service.rating} ⭐
          </p>
          <button className="btn btn-primary mb-5">Learn More</button>

          <div className="my-5">
            <textarea
              className="textarea textarea-bordered w-full"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment"
            ></textarea>
            <button className="btn btn-primary mt-3" onClick={handleAddComment}>
              Add Comment
            </button>
          </div>
          <div className="mt-5">
            <h2 className="text-xl mb-3">Comments</h2>
            {comments.length > 0 ? (
              comments.map((c, index) => (
                <p key={index} className="mb-2 bg-gray-100 p-3 rounded">
                  {c}
                </p>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
};

export default ServiceDetails;
