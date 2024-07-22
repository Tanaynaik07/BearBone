import React, { useState } from "react";

const ProductPage = () => {
  const [deliveryDate, setDeliveryDate] = useState("");

  const checkDeliveryDate = () => {
    console.log("Checking delivery date for:", deliveryDate);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <img src="/image1.jpeg" alt="Product" className="max-w-lg md:max-w-2xl lg:max-w-4xl w-auto h-auto" />
      </div>
      <div className="flex-1 px-2 md:px-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif', color: 'olive' }}>Weaved Cotton T-Shirt</h1>
        <p className="text-sm md:text-md lg:text-lg">T-shirt in midweight cotton jersey with a print motif, round, rib-trimmed neckline, dropped shoulders and a straight-cut hem. Loose fit for a generous but not oversized silhouette.</p>
        <div className="flex mt-4 justify-center items-center">
          <div className="h-6 w-6 bg-red-500 mr-2"></div>
          <div className="h-6 w-6 bg-green-500 mr-2"></div>
          <div className="h-6 w-6 bg-blue-500"></div>
        </div>
        <div className="mt-4 text-center">
          <p>Select Size</p>
          <div className="flex flex-wrap justify-center items-center mt-2">
            <button className="border border-gray-400 px-3 py-2 mx-1 my-1 text-sm">S</button>
            <button className="border border-gray-400 px-3 py-2 mx-1 my-1 text-sm">M</button>
            <button className="border border-gray-400 px-3 py-2 mx-1 my-1 text-sm">L</button>
            <button className="border border-gray-400 px-3 py-2 mx-1 my-1 text-sm">XL</button>
            <button className="border border-gray-400 px-3 py-2 mx-1 my-1 text-sm">XXL</button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-black text-white px-4 py-2 mx-2 rounded-md">Add to Cart</button>
            <button className="bg-gray-500 text-white px-4 py-2 mx-2 rounded-md">Add to Wishlist</button>
          </div>
          <div className="mt-4">
            <p>Estimated Delivery Date</p>
            <div className="flex justify-center items-center mt-2">
              <input
                type="text"
                placeholder="Enter your ZIP code"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="border border-gray-400 px-3 py-2 mx-1 my-1 rounded-md"
              />
              <button onClick={checkDeliveryDate} className="bg-black text-white px-4 py-2 mx-1 my-1 rounded-lg">Check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;