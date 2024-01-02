import React from "react";

const DashboardHeader: React.FC = (props) => {
  return (
    <header id="header" className="shadow fixed top-0 left-0 w-full">
      <div className="w-full flex">
        <div>Logo clickup</div>
        <div>Search the whole project</div>
        <div>Upgrade subscription</div>
        <div>Button crate everything</div>
        <div>Quicks Action Menu Button</div>
        <div>User Menu</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
