import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/image-5.jpg')", 
      }}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4">
        
          <Image
            src="/logo.png"  // Logo add krdena 
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        <h1 className="text-3xl font-bold text-black">Product Comparison</h1>

        
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/comparison" className="hover:underline">
            Comparison
          </a>
        </nav>
      </div>
    </div>
  );
};




const ProductSection = () => {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Go to Product page for more Products
            </h2>
            <a
              href="/products"
              className="text-base font-medium text-gray-500 hover:text-gray-700 underline"
            >
              View More
            </a>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/images/image-1.png"
                alt="Asgaard Sofa"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Asgaard Sofa
              </h3>
              <p className="text-gray-600 mt-1">Rs. 250,000.00</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(204 Reviews)</span>
              </div>
            </div>
  
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/images/image-1.png"
                alt="Outdoor Sofa Set"
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Outdoor Sofa Set
              </h3>
              <p className="text-gray-600 mt-1">Rs. 224,000.00</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(145 Reviews)</span>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Add A Product
            </h3>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
              Choose a Product
            </button>
          </div>
        </div>
      </div>
    );
  };


  const ProductComparison: React.FC = () => {
    return (
      <div className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-2xl font-bold mb-6">Product Comparison</h2> */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">General</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Vehicle Type</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
              </tr>


              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Product</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Vehicle Type</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
              </tr>

              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Dimensions</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Vehicle Type</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
              </tr>


              <tr>
              {/* <th className="border-b-2 border-gray-200 px-4 py-3 text-left sm:text-center lg:text-left"></th> */}
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left">Warenty</th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
                <th className="border-b-2 border-gray-200 px-4 py-3 text-left"></th>
              </tr>
            
              <tr>
                <td className="border-b border-gray-200 px-4 py-3">Vehicle Type</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
                <td className="border-b border-gray-200 px-4 py-3">Sedan</td>
              </tr>
              

              {/* <tr> */}
            
              </thead>
            <tbody>

            
            

              
              
            </tbody>
          </table>
        </div>
      </div>
    );
  };




  const FeatureSection: React.FC = () => {
    return (
      <div className="bg-neutral-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">High Quality</h3>
              <p className="text-neutral-500">Crafted from top materials</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">Warranty Protection</h3>
              <p className="text-neutral-500">Over 2 years</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">Free Shipping</h3>
              <p className="text-neutral-500">Order over $150</p>
            </div>
          </div>
  
          <div className="flex items-center space-x-4">
            <div className="bg-neutral-200 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-neutral-800">24 / 7 Support</h3>
              <p className="text-neutral-500">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default function ComparisonPage(){
    return (
        <div>
            <HeroSection />
            <ProductSection />
            <ProductComparison />
            <FeatureSection />
        </div>
    )
}
