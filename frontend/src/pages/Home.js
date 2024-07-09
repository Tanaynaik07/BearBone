import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzlLtsN1Vis5JXETPgh14_NgY7DinE8cH2Q&s"
            alt="Coming Soon"
            className="w-full h-auto object-cover"
          />
          <span className="text-4xl font-bold mt-4">COMING SOON</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt="Product 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1575202332411-b01fe9ace7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxmYXNoaW9ufGVufDB8fDB8fHww"
            alt="Product 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center bg-yellow-100 p-4">
          <span className="text-4xl font-bold">SUMMER COLLECTION 2024</span>
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">19</span>
              <span>HOURS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">25</span>
              <span>MINUTES</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">54</span>
              <span>SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
