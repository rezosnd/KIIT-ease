"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function TermsPageClient() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6 text-primary">Terms and Conditions</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing or using KIITease, you agree to be bound by these Terms and Conditions. If you do not agree
              to all the terms and conditions, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. User Accounts</h2>
            <p className="text-gray-700 dark:text-gray-300">
              When you create an account with us, you must provide accurate and complete information. You are
              responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Conduct</h2>
            <p className="text-gray-700 dark:text-gray-300">You agree not to use KIITease to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>Violate any laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Submit false or misleading information</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Interfere with the proper working of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Premium Membership</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Premium membership provides access to additional features as described on our website. Payment for premium
              membership is processed through our payment partners. Refunds are subject to our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Section Swapping</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The section swapping feature is provided as-is. KIITease does not guarantee that a match will be found for
              your swap request. All swaps are subject to mutual agreement between the parties involved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Notes Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Users who upload notes retain copyright to their original content. By uploading notes, you grant KIITease
              a license to display and distribute the content to other users of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Teacher Reviews</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Reviews must be honest and based on personal experience. KIITease reserves the right to remove reviews
              that are inappropriate, offensive, or violate our content guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Referral Program</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Referral rewards are subject to verification and may be revoked in cases of fraud or abuse. KIITease
              reserves the right to modify or terminate the referral program at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              KIITease and its affiliates shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              KIITease reserves the right to modify these terms at any time. We will provide notice of significant
              changes by posting the new terms on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                our contact page
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">Last updated: June 13, 2025</p>
        </div>
      </motion.div>
    </div>
  )
}
