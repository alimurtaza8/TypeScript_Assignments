const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand and Social Links */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Bandage</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
  
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Company Info</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
  
            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Business Marketing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">User Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Live Chat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500">Unlimited Support</a></li>
              </ul>
            </div>
  
            {/* Get in Touch */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
              <form>
                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-300 pt-6 text-center">
            <p className="text-gray-500">
              Made With Love By Finland. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;