import { FaCube, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-gold to-accent-orange rounded-lg flex items-center justify-center">
                <FaCube className="text-primary-dark text-lg" />
              </div>
              <span className="text-2xl font-bold gradient-text">CADCAMX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional offshore CAD/CAM services delivering excellence at
              affordable rates.
            </p>
            <div className="flex space-x-4">
              <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer">
                <FaTwitter />
              </span>
              <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer">
                <FaYoutube />
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  2D Drafting
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  3D Modeling
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  CAM Programming
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Reverse Engineering
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Simulation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Help Center
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-accent-gold transition-colors cursor-pointer">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center mb-4 md:mb-0">
              <p className="text-gray-400 font-medium">
                Secure Data • Confidential Projects • Fast Delivery
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              <p>&copy; 2024 CADCAMX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
