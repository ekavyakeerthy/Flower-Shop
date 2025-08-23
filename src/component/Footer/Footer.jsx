const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-100 border-t border-pink-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            Bloomify
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-sm">
            Handpicked blooms, crafted with love 🌷  
            Making every occasion truly special.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right text-gray-600">
          <p>📍 123 Bloom Street, Chennai</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@bloomify.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-200 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bloomify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;