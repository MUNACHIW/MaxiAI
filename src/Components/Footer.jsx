import { Link } from "react-router-dom";

const Footer = ()=>{


    return(
        <footer   className="footer-container">
          <div className="maxend">
            <h1>This should answer all frequently asked questions </h1>
            <p>
          With MaxAI, users can quickly unlock the power of generative AI, 
          optimizing agility to meet<br></br> business needs and transforming<br></br> raw data into insightful stories.
           It’s a tool designed for anyone who wants to use AI to <br></br>
          solve text and image-based problems efficiently and effectively.
          </p>
          </div>
          <div className="footer">
             <li><Link to="/">Home</Link></li>
             <li><a href="https://www.maxai.me/?via=munachimso">Download MaxAI extension</a></li>
             <li><Link to="/about">About Us</Link></li>
             <li><Link to="/components">Services</Link></li>

             <li><Link href="/ContactUs">Contact Us</Link></li>
          </div>
        
        </footer>
    )
     
};

export default Footer
