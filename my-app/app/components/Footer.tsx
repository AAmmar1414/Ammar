import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* First Column */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Sofa</a></li>
            <li><a href="#" className="hover:text-white">Armchair</a></li>
            <li><a href="#" className="hover:text-white">wingchair </a></li>
            <li><a href="#" className="hover:text-white">tablechair</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Live Chat</a></li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
