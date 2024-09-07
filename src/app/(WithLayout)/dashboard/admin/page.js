import React from "react";

const AdminPage = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AdminPage;
