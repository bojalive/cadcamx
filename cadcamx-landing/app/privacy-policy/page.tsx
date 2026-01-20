import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaShieldAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Privacy Policy | CADCAMX",
  description: "CADCAMX privacy policy. Learn how we collect, use, and protect your personal information and project data.",
  openGraph: {
    title: "Privacy Policy | CADCAMX",
    description: "Learn how CADCAMX protects your data and privacy.",
    type: "website",
    url: "https://cadcamx.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

          <div className="mb-12">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaShieldAlt className="mr-2" />
              Legal
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  CADCAMX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed
                  to protecting your personal information. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our CAD/CAM services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Project Data:</strong> CAD files, technical specifications, design requirements</li>
                  <li><strong>Communication Data:</strong> Emails, messages, and project discussions</li>
                  <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                  <li><strong>Payment Information:</strong> Billing details processed through secure payment providers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and deliver CAD/CAM services you request</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Process payments and manage billing</li>
                  <li>Improve our services and develop new features</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure file storage with access controls</li>
                  <li>Regular security audits and assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Non-disclosure agreements for all projects</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Project Confidentiality</h2>
                <p>
                  All project files, designs, and technical information you share with us are treated
                  as strictly confidential. We sign NDAs upon request and never share your intellectual
                  property with third parties without explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <p>
                  We retain your project data for the duration of our business relationship plus
                  a reasonable period for legal compliance. You may request deletion of your data
                  at any time, subject to legal retention requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Services</h2>
                <p>
                  We may use third-party services for payment processing, file storage, and
                  communication. These services have their own privacy policies and are selected
                  based on their security and privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 bg-white/5 rounded-lg p-6">
                  <p><strong>Email:</strong> leancamsys@gmail.com</p>
                  <p><strong>Phone:</strong> +1 (715) 501-3103</p>
                  <p><strong>Address:</strong> 8th Green Street, Delaware, United States</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  material changes by posting the new policy on this page with an updated date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
