const Footer = () => {
    return (
      <footer className="footer p-10 mt-32 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span> 
          <a href="#" className="link link-hover">Career Counseling</a>
          <a href="#" className="link link-hover">Resume Review</a>
          <a href="#" className="link link-hover">Interview Preparation</a>
          <a href="#" className="link link-hover">Job Matching</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a href="#" className="link link-hover">About us</a>
          <a href="#" className="link link-hover">Contact</a>
          <a href="#" className="link link-hover">Careers</a>
          <a href="#" className="link link-hover">Press</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a href="#" className="link link-hover">Terms of use</a>
          <a href="#" className="link link-hover">Privacy policy</a>
          <a href="#" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;