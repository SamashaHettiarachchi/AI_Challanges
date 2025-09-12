"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CallToAction from "@/components/CallToAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faRoute,
  faExclamationTriangle,
  faUserCog,
  faLanguage,
  faDollarSign,
  faUsers,
  faMobile,
  faBus,
  faTrain,
  faCar,
  faCalculator,
  faDownload,
  faGlobe,
  faChartLine,
  faSync,
  faUniversalAccess,
  faArrowTrendUp,
  faCheck,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faFlag,
  faSeedling,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "Real-time Transit Updates",
    "Multi-Modal Route Planning",
    "AI-Powered Personalization",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
            <span
              className={`font-bold text-xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Smart Transit
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className={`hover:text-green-500 transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#features"
              className={`hover:text-blue-500 transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Features
            </a>
            <a
              href="#gallery"
              className={`hover:text-teal-500 transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Gallery
            </a>
            <a
              href="#benefits"
              className={`hover:text-green-500 transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Benefits
            </a>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-glow">
            Download
          </button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-teal-600 text-white flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-400/15 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-10 right-20 w-32 h-32 bg-green-300/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-blue-300/15 rounded-full blur-2xl animate-float delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-200 via-white to-blue-200 bg-clip-text text-transparent animate-slide-in-left">
              Smart Transit Companion
            </h1>
            <div className="h-8 mb-8">
              <p className="text-2xl font-medium transition-all duration-500 animate-slide-in-right">
                {heroFeatures[currentSlide]}
              </p>
            </div>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in delay-300">
              Transform your commuting experience with real-time, personalized
              travel guidance powered by cutting-edge AI technology designed
              specifically for Sri Lankan transport.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
              <button className="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 animate-pulse-slow">
                <span className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faMobile}
                    className="text-xl animate-bounce"
                  />
                  <span>Download for Android</span>
                </span>
              </button>
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-pulse-slow delay-200">
                <span className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faApple}
                    className="text-xl animate-bounce delay-100"
                  />
                  <span>Download for iOS</span>
                </span>
              </button>
            </div>

            <div className="flex justify-center space-x-8 text-center animate-fade-in delay-700">
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 group-hover:text-green-300 transition-colors animate-bounce">
                  50%
                </div>
                <div className="text-sm opacity-80">Less Waiting Time</div>
              </div>
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 group-hover:text-blue-300 transition-colors animate-bounce delay-100">
                  24/7
                </div>
                <div className="text-sm opacity-80">Real-time Updates</div>
              </div>
              <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold mb-1 group-hover:text-teal-300 transition-colors animate-bounce delay-200">
                  100+
                </div>
                <div className="text-sm opacity-80">Routes Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              About the App
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  The Problem
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Public transport in Sri Lanka is fragmented, analog, and
                  unpredictable, with limited real-time data, poor integration,
                  and minimal user-centric innovation affecting millions of
                  daily commuters.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Solution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  An AI-powered, multi-agent ecosystem that delivers
                  personalized, real-time, multi-modal travel assistance,
                  transforming how Sri Lankans experience public transport.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-3xl text-white shadow-2xl transform hover:rotate-1 transition-all duration-500">
                <h3 className="text-3xl font-bold mb-6">
                  Multi-Agent AI System
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span>Data Aggregation & Real-time Processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span>Intelligent Route Optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span>Proactive Disruption Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    <span>Personalized Experience Engine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-teal-200/20 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI-Powered Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 mx-auto rounded-full mb-4 animate-pulse"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each feature is powered by specialized AI agents working together
              seamlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:border-green-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Data Aggregation Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collects and unifies real-time transport data from APIs, GTFS
                feeds, crowdsourced inputs, and official sources across Sri
                Lanka.
              </p>
              <div className="mt-4 flex items-center text-sm text-green-500 font-medium group-hover:animate-pulse">
                <span>Real-time Processing</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:border-blue-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce delay-100">
                <FontAwesomeIcon
                  icon={faRoute}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Route Optimization Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Designs intelligent multimodal travel plans that minimize travel
                time, waiting periods, and transportation costs.
              </p>
              <div className="mt-4 flex items-center text-sm text-blue-500 font-medium group-hover:animate-pulse">
                <span>Smart Planning</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-teal-100 hover:border-teal-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce delay-200">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                Disruption Management Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Proactively detects service delays, strikes, or interruptions
                and dynamically reroutes users with alternative options.
              </p>
              <div className="mt-4 flex items-center text-sm text-teal-500 font-medium group-hover:animate-pulse">
                <span>Proactive Alerts</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-orange-100 hover:border-orange-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce delay-300">
                <FontAwesomeIcon
                  icon={faUserCog}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                Personalization Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Learns individual preferences for travel modes, timing patterns,
                accessibility needs, and budget constraints.
              </p>
              <div className="mt-4 flex items-center text-sm text-orange-500 font-medium group-hover:animate-pulse">
                <span>AI Learning</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-pink-100 hover:border-pink-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce delay-400">
                <FontAwesomeIcon
                  icon={faLanguage}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Language & Accessibility Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Provides multilingual support (Sinhala, Tamil, English), voice
                assistance, and visually adaptive interfaces.
              </p>
              <div className="mt-4 flex items-center text-sm text-pink-500 font-medium group-hover:animate-pulse">
                <span>Universal Access</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-xl border border-teal-100 hover:border-teal-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-500">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce delay-500">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-600">
                Fare Optimization Agent
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Identifies the most cost-effective travel combinations,
                including seasonal passes, student discounts, and special
                offers.
              </p>
              <div className="mt-4 flex items-center text-sm text-teal-500 font-medium group-hover:animate-pulse">
                <span>Smart Savings</span>
                <span className="ml-2 animate-bounce">→</span>
              </div>
            </div>
          </div>

          {/* Local Knowledge Agent - Full Width */}
          <div className="mt-12">
            <div className="group bg-gradient-to-r from-green-500 via-blue-500 to-teal-500 p-8 rounded-3xl shadow-2xl text-white transform hover:scale-[1.02] transition-all duration-300 animate-fade-in delay-600">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-3xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">
                    Local Knowledge Agent
                  </h3>
                  <p className="text-xl leading-relaxed opacity-90">
                    Supplements official transport data with
                    community-contributed updates, especially valuable for rural
                    and semi-urban areas where digital coverage is limited.
                  </p>
                  <div className="mt-4 flex items-center text-lg font-medium">
                    <span>Community-Powered Intelligence</span>
                    <span className="ml-2 animate-bounce">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Screenshots/Gallery Section */}
      <section
        id="gallery"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              App Screenshots
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the intuitive design and powerful features of our Smart
              Transit Companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-4">
                <Image
                  src="https://picsum.photos/400/600?random=1"
                  alt="Real-time route planning interface"
                  width={400}
                  height={600}
                  className="rounded-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  Real-time Route Planning
                </h3>
                <p className="text-gray-600">
                  Intelligent multi-modal journey planning with live updates
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    GPS Tracking
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    Live Data
                  </span>
                </div>
              </div>
            </div>

            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-green-100 to-teal-100 p-4">
                <Image
                  src="https://picsum.photos/400/600?random=2"
                  alt="Multilingual support and notifications"
                  width={400}
                  height={600}
                  className="rounded-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  Smart Notifications
                </h3>
                <p className="text-gray-600">
                  Proactive alerts in Sinhala, Tamil, and English
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    Multilingual
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    Voice Support
                  </span>
                </div>
              </div>
            </div>

            <div className="group text-center transform hover:scale-105 transition-all duration-500">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <Image
                  src="https://picsum.photos/400/600?random=3"
                  alt="Personalized travel recommendations"
                  width={400}
                  height={600}
                  className="rounded-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  AI Personalization
                </h3>
                <p className="text-gray-600">
                  Customized recommendations based on your preferences
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    AI Learning
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    Smart Routes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Showcase */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FontAwesomeIcon icon={faBus} className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Bus Tracking</h4>
              <p className="text-sm text-gray-600">Live bus locations</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faTrain}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="font-bold text-gray-800">Train Schedules</h4>
              <p className="text-sm text-gray-600">Real-time updates</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FontAwesomeIcon icon={faCar} className="text-2xl text-white" />
              </div>
              <h4 className="font-bold text-gray-800">Tuk-Tuk Routes</h4>
              <p className="text-sm text-gray-600">Last-mile connectivity</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCalculator}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="font-bold text-gray-800">Fare Calculator</h4>
              <p className="text-sm text-gray-600">Best price options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Expected Benefits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your daily commute and experience the future of public
              transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-purple-100 hover:border-purple-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-2xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-purple-600">
                    50% Reduction in Uncertainty
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Real-time guidance and proactive disruption alerts ensure
                    you're always informed about your journey, eliminating
                    guesswork and anxiety.
                  </p>
                  <div className="flex items-center text-sm text-purple-500 font-medium">
                    <span>Real-time Updates</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2">Predictive Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-pink-100 hover:border-pink-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-right">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faSync}
                    className="text-2xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-pink-600">
                    Seamless Multi-Modal Integration
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Effortless transitions between buses, trains, tuk-tuks, and
                    walking routes with optimized connections and minimal
                    waiting times.
                  </p>
                  <div className="flex items-center text-sm text-pink-500 font-medium">
                    <span>Smart Connections</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2">Unified Journey Planning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-green-100 hover:border-green-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-left delay-200">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faUniversalAccess}
                    className="text-2xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-green-600">
                    Universal Accessibility
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Comprehensive support for tourists, non-locals, and
                    differently abled passengers with multilingual interfaces
                    and accessibility features.
                  </p>
                  <div className="flex items-center text-sm text-green-500 font-medium">
                    <span>Inclusive Design</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2">Voice Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border border-blue-100 hover:border-blue-300 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-in-right delay-200">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="text-2xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">
                    Increased Public Transport Adoption
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Enhanced reliability, transparency, and user experience
                    encourage more people to choose sustainable public transport
                    options.
                  </p>
                  <div className="flex items-center text-sm text-blue-500 font-medium">
                    <span>Sustainable Mobility</span>
                    <span className="ml-2">•</span>
                    <span className="ml-2">Environmental Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                2M+
              </div>
              <div className="text-gray-600">Daily Commuters</div>
              <div className="text-sm text-gray-500">in Colombo Region</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-600">Bus Routes</div>
              <div className="text-sm text-gray-500">Island-wide Coverage</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="text-gray-600">Languages</div>
              <div className="text-sm text-gray-500">
                Sinhala, Tamil, English
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
              <div className="text-sm text-gray-500">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent)] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBus}
                    className="text-2xl text-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    Smart Transit Companion
                  </h3>
                  <p className="text-gray-300 text-sm">
                    AI-Driven Mobility Assistant
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transforming public transportation in Sri Lanka through
                cutting-edge AI technology, making commuting smarter, faster,
                and more inclusive for everyone.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faMobile} className="text-lg" />
                  <span>Get Android App</span>
                </button>
                <button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faApple} className="text-lg" />
                  <span>Get iOS App</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Screenshots
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-400">
                Connect With Us
              </h4>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-400"
                  />
                  <span>info@smarttransit.lk</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faPhone} className="text-green-400" />
                  <span>+94 11 234 5678</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-red-400"
                  />
                  <span>Colombo, Sri Lanka</span>
                </p>
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Smart Transit Companion. All rights reserved. |
                <span className="text-blue-400 ml-1">SLAIC 2025 Project</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faFlag} className="text-orange-400" />
                  <span>Made in Sri Lanka</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <FontAwesomeIcon
                    icon={faSeedling}
                    className="text-green-400"
                  />
                  <span>Sustainable Transport</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faRobot} className="text-blue-400" />
                  <span>AI-Powered</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
