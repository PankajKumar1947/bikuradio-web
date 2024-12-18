'use client'

import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Download Biku Radio Now
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the ultimate radio streaming app on your device
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#" 
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-purple-100 transition duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download for iOS
          </a>
          <a 
            href="#" 
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-purple-100 transition duration-300"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download for Android
          </a>
        </motion.div>
      </div>
    </section>
  )
}

