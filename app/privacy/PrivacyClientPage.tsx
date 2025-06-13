"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function PrivacyClientPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We collect information you provide directly to us when you create an account, such as your name, email
              address, password, and academic information. We may also collect information about your use of our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Sharing of Information</h2>
            <p className="text-gray-700 dark:text-gray-300">We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>Other users as part of the section swapping feature</li>
              <li>Service providers who perform services on our behalf</li>
              <li>Law enforcement or other parties if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and
              unauthorized access. However, no security system is impenetrable, and we cannot guarantee the security of
              your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Choices</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You can update your account information at any time by logging into your account. You may also opt out of
              receiving promotional emails by following the instructions in those emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use cookies and similar technologies to collect information about your browsing activities and to
              distinguish you from other users of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
