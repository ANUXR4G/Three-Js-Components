"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CircleDot } from 'lucide-react'

const cn = (...classes: (string | undefined | boolean | null)[]): string =>
  classes.filter(Boolean).join('')

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    // Optional mouse interaction logic
  }

  return (
    <div>
      <div className="bg-white">
        <header
          className={cn(
            "fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 flex items-center justify-between transition-all duration-500",
            isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"
          )}
        >
          <motion.div
            className="text-2xl md:text-3xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            VSAY
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact button"
            >
              <span className="text-2xl">−</span>
            </motion.button>

            <motion.button
              className="bg-[#333] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0016ec]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LET&apos;S TALK <span className="text-xs">•</span>
            </motion.button>

            {/* Menu Button + Dropdown */}
            <div className="relative">
              <motion.button
                className="group flex items-center justify-between px-6 py-3 bg-gray-100 rounded-full text-black font-medium transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-expanded={isMenuOpen}
                aria-label="Menu"
              >
                <span className="mr-4">{isMenuOpen ? "CLOSE" : "MENU"}</span>
                <div
                  className={cn(
                    "flex transition-all duration-500 ease-in-out",
                    "flex-row space-x-1 group-hover:flex-col group-hover:space-x-0 group-hover:space-y-1"
                  )}
                >
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                </div>
              </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-4 z-50 w-72 bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="p-6">
                      <div className="text-lg font-semibold mb-4">Navigation</div>
                      <nav className="space-y-2">
                        <Link href="/" className="flex items-center justify-between text-base group">
                          Home <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                        <Link href="/about" className="flex items-center justify-between text-base group">
                          About <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                        <Link href="/services" className="flex items-center justify-between text-base group">
                          Services <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                        <Link href="/contact" className="flex items-center justify-between text-base group">
                          Contact <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                      </nav>

                      <div className="mt-6">
                        <div className="flex items-center bg-gray-100 rounded-full p-2">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent flex-1 outline-none px-2 text-gray-600"
                          />
                          <motion.button
                            className="p-2 bg-black rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ArrowRight className="h-5 w-5 text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <CircleDot className="h-4 w-4 text-black" />
                        <span className="text-sm font-medium">VSAY</span>
                      </div>
                      <p className="text-xs text-gray-500">© 2025</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </header>

        <main>
          <section
            ref={containerRef}
            className="h-full relative overflow-hidden flex flex-col justify-start items-center px-6 md:px-12"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="max-w-3xl mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-medium text-black">
                Empowering Your Business with New Possibilities with VSAY
              </h1>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  )
}
