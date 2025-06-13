"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6 text-primary">About KIITease</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="KIITease Team"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                KIITease was created with a simple mission: to make student life at KIIT University easier and more
                efficient. We understand the challenges students face and have built a platform that addresses key pain
                points.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                From section swapping to accessing quality notes and teacher reviews, our platform provides tools that
                enhance the academic experience for all KIIT students.
              </p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              KIITease began as a project by KIIT students who experienced firsthand the difficulties of section
              changes, finding reliable study materials, and choosing the right professors. What started as a simple
              solution for section swapping has evolved into a comprehensive platform serving the entire KIIT community.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our team consists of passionate developers, designers, and student advocates who are committed to
              continuously improving the platform based on user feedback and emerging needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-primary">Student-First</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every feature we build starts with the question: "How does this help students?"
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-primary">Transparency</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in clear, honest communication with our users about how our platform works.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-primary">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We're constantly looking for new ways to solve student problems and improve the university experience.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
