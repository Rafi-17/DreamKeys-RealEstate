import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

  // List of routes where the footer should not be displayed
  const noFooterRoutes = ["/register", "/login"];

  // Check if the current path is in the noFooterRoutes list
  if (noFooterRoutes.includes(location.pathname)) {
    return null; // Don't render the footer
  }
    return (
        <div className="">
            Footer here
        </div>
    );
};

export default Footer;