import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
     
      <i></i>Made With 🍵 At 🏠 by Saikrishna Reddy
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/sredd005"
        aria-label="My GitHub"
      >
     
      </a>{" "}
      
      <p>
        <small className="text-muted">
          {" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;