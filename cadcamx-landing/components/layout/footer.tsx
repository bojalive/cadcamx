import Link from "next/link";
import { FaCube, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-gold to-accent-orange rounded-lg flex items-center justify-center">
                <FaCube className="text-primary-dark text-lg" />
              </div>
              <span className="text-2xl font-bold gradient-text">CADCAMX</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional offshore CAD/CAM services delivering excellence at
              affordable rates.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-all cursor-pointer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/2d-drafting"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  2D Drafting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/3d-modeling"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  3D Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cam-programming"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  CAM Programming
                </Link>
              </li>
              <li>
                <Link
                  href="/services/reverse-engineering"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Reverse Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/simulation"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Simulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-400 hover:text-accent-gold transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-medium mb-2">
                Secure Data • Confidential Projects • Fast Delivery
              </p>
              <p className="text-gray-500 text-sm">
                Talent Scope Consulting Inc. | +1 7155013103 | leancamsys@gmail.com
              </p>
              <p className="text-gray-500 text-sm">
                US Office: 8th Green Street, Delaware, United States
              </p>
              <p className="text-gray-500 text-sm">
                ODC: No. 11/4, Pooja Garden, Kalapatti Main Rd, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
              </p>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Talent Scope Consulting Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
