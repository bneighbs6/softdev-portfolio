import React from "react";
import NavigationBar from "./NavigationBar";

function Header() {
    return (
      <div className="header-container"> {/* Added a parent div for flexbox */}
        <div className="left-header">
          <h3>
            brettwebdev.com
          </h3>
        </div>
        <div className="right-header">
          <NavigationBar />
        </div>
      </div>
    );
}

export default Header;