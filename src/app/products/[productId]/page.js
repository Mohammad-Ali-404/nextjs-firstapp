import React from "react";

const DynnamicPage = ({ params }) => {
  return (
    <div>
      <h1>Single Product {params.productId}</h1>
    </div>
  );
};

export default DynnamicPage;
