const Faq = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <div>
          <h4 className="font-bold">What is career counseling?</h4>
          <p>
            Career counseling helps you choose, change, or advance your career
            with professional guidance.
          </p>
        </div>
        <div>
          <h4 className="font-bold">How do I book a session?</h4>
          <p>
            You can book a session through our website by selecting the desired
            service.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Are the sessions conducted online?</h4>
          <p>
            Yes, we offer both online and offline sessions based on your
            preference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
