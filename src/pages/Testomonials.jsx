import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded">
          <p className="italic">"The career counseling service helped me find my dream job. Highly recommended!"</p>
          <h4 className="font-bold mt-4">- Sarah Johnson</h4>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <p className="italic">"Excellent resume review service. My resume stands out now!"</p>
          <h4 className="font-bold mt-4">- David Lee</h4>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <p className="italic">"The interview preparation tips were spot on. I aced my interview!"</p>
          <h4 className="font-bold mt-4">- Emily Carter</h4>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;