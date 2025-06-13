"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is KIITease?",
          answer:
            "KIITease is a platform designed specifically for KIIT University students to facilitate section swapping, access teacher reviews, share notes, and more. Our goal is to enhance the academic experience for all KIIT students.",
        },
        {
          question: "Is KIITease affiliated with KIIT University?",
          answer:
            "No, KIITease is an independent platform created by KIIT students to help fellow students. We are not officially affiliated with KIIT University.",
        },
        {
          question: "How do I create an account?",
          answer:
            'You can create an account by clicking on the "Register" button in the top right corner of the homepage. You\'ll need to provide your name, email address, and create a password. You can also sign up using your Google account.',
        },
      ],
    },
    {
      category: "Premium Membership",
      questions: [
        {
          question: "What benefits do premium members get?",
          answer:
            "Premium members can view teacher reviews, download and upload notes, and get priority in section swap matching. They also receive enhanced support and early access to new features.",
        },
        {
          question: "How much does premium membership cost?",
          answer:
            "Premium membership costs ₹299 per semester. We also offer special discounts for students who refer others to the platform.",
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer:
            "Yes, we offer a 7-day money-back guarantee if you're not satisfied with your premium membership. Please contact our support team to process your refund.",
        },
      ],
    },
    {
      category: "Section Swapping",
      questions: [
        {
          question: "How does section swapping work?",
          answer:
            "Section swapping allows you to request a change from your current section to another. When another student from your target section wants to swap to your section, our system matches you both and notifies you. Both parties must accept the swap for it to be finalized.",
        },
        {
          question: "Which branches are eligible for section swapping?",
          answer:
            "Currently, section swapping is available for CSE (55 sections), IT (5 sections), CSSE (3 sections), and CSCE (3 sections) branches.",
        },
        {
          question: "How long does it take to find a match?",
          answer:
            "The time to find a match depends on the availability of complementary swap requests. Some popular sections may match quickly, while others might take longer. You'll be notified as soon as a match is found.",
        },
      ],
    },
    {
      category: "Notes Sharing",
      questions: [
        {
          question: "Who can upload notes?",
          answer: "Only premium members and admins can upload notes to the platform.",
        },
        {
          question: "Who can download notes?",
          answer:
            "Only premium members can download notes. Free users can see the notes catalog but need to upgrade to premium to download them.",
        },
        {
          question: "What file formats are supported for notes?",
          answer: "We support PDF, DOCX, PPTX, and image formats (JPG, PNG) for notes uploads.",
        },
      ],
    },
    {
      category: "Teacher Reviews",
      questions: [
        {
          question: "Can I review any teacher?",
          answer:
            "Yes, both free and premium users can submit reviews for teachers they've had classes with. However, only premium users can view the reviews.",
        },
        {
          question: "How many reviews can I submit?",
          answer:
            "You can submit one review per teacher per subject. This ensures that reviews are specific and helpful.",
        },
        {
          question: "Are reviews moderated?",
          answer: "Yes, all reviews are subject to moderation. Inappropriate or offensive reviews will be removed.",
        },
      ],
    },
    {
      category: "Referral System",
      questions: [
        {
          question: "How does the referral system work?",
          answer:
            "When you sign up, you receive a unique referral code. Share this code with friends, and when they sign up using your code, you receive benefits such as premium days or discounts.",
        },
        {
          question: "What rewards do I get for referring friends?",
          answer:
            "For each successful referral, you receive 7 days of premium membership. If your referral upgrades to premium, you receive an additional 14 days.",
        },
        {
          question: "Is there a limit to how many people I can refer?",
          answer:
            "No, there's no limit to the number of people you can refer. The more people you refer, the more rewards you earn!",
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState("General")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6 text-primary">Frequently Asked Questions</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.category
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div>
            {faqs
              .filter((category) => category.category === activeCategory)
              .map((category) => (
                <div key={category.category}>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Didn't find what you're looking for?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for more information.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
