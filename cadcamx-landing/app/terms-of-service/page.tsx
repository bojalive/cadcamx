import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaFileContract } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Terms of Service | CADCAMX",
  description: "CADCAMX terms of service. Read our terms and conditions for using our CAD/CAM engineering services.",
  openGraph: {
    title: "Terms of Service | CADCAMX",
    description: "Terms and conditions for CADCAMX CAD/CAM services.",
    type: "website",
    url: "https://cadcamx.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Header />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />

          <div className="mb-12">
            <Badge className="bg-accent-gold/10 border-accent-gold/20 text-accent-gold mb-4">
              <FaFileContract className="mr-2" />
              Legal
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-400">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using CADCAMX services, you agree to be bound by these Terms
                  of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
                <p>
                  CADCAMX provides professional CAD/CAM engineering services including but not
                  limited to 3D modeling, 2D drafting, CAM programming, reverse engineering,
                  and finite element analysis. Services are provided based on project requirements
                  and agreed specifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Project Engagement</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projects commence upon written agreement and receipt of required files/information</li>
                  <li>Project scope, timeline, and pricing are defined in project proposals</li>
                  <li>Changes to scope may affect timeline and pricing</li>
                  <li>Client approval is required at defined milestones</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms are specified in project proposals</li>
                  <li>For new clients, 50% advance payment may be required</li>
                  <li>Final deliverables are released upon full payment</li>
                  <li>Late payments may incur interest charges</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  Upon full payment, all intellectual property rights to deliverables transfer
                  to the client. CADCAMX retains:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to use generic templates and methodologies</li>
                  <li>Know-how and expertise gained during the project</li>
                  <li>The right to reference the project (with client consent) for portfolio purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                <p>
                  We treat all client information and project data as confidential. We are
                  willing to sign Non-Disclosure Agreements (NDAs) upon request. Our employees
                  and contractors are bound by confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Revisions and Changes</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard projects include up to 2 rounds of revisions</li>
                  <li>Additional revisions are billed at agreed hourly rates</li>
                  <li>Changes to original scope require change order approval</li>
                  <li>Rush services are available at premium rates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Warranties and Liability</h2>
                <p className="mb-4">
                  CADCAMX warrants that deliverables will conform to agreed specifications.
                  However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not liable for issues arising from incorrect client specifications</li>
                  <li>Maximum liability is limited to fees paid for the specific project</li>
                  <li>We are not responsible for manufacturing or production outcomes</li>
                  <li>Client is responsible for final design validation and approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                <p>
                  Either party may terminate a project with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Client pays for work completed to date</li>
                  <li>Completed work products are delivered upon payment</li>
                  <li>Both parties return confidential information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
                <p>
                  Any disputes shall first be attempted to be resolved through good faith
                  negotiation. If unresolved, disputes shall be subject to binding arbitration
                  in accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws
                  of the State of Delaware, United States, without regard to its conflict of
                  law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 bg-white/5 rounded-lg p-6">
                  <p><strong>Email:</strong> leancamsys@gmail.com</p>
                  <p><strong>Phone:</strong> +1 (715) 501-3103</p>
                  <p><strong>Address:</strong> 8th Green Street, Delaware, United States</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
