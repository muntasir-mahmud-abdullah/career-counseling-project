import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import servicesData from "../data/services.json";

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
      {service ? (
        <>
          <h1 className="text-2xl mb-5">{service.name}</h1>
          <p>{service.description}</p>
          <div className="my-5">
            <textarea
              className="textarea textarea-bordered w-full"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment"
            ></textarea>
            <button className="btn btn-primary mt-3" onClick={handleAddComment}>Add Comment</button>
          </div>
          <div className="mt-5">
            <h2 className="text-xl mb-3">Comments</h2>
            {comments.map((c, index) => (
              <p key={index} className="mb-2">{c}</p>
            ))}
          </div>
        </>
      ) : (
        <p>Service not found</p>
      )}
    </div>
  );
};

export default ServiceDetails;