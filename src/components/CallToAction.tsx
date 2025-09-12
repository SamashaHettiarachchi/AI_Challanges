import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-300/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-blue-400/15 rounded-full blur-xl animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Commute?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-in-left delay-200">
            Join thousands of Sri Lankan commuters who are already experiencing
            smarter, faster, and more reliable public transportation with our
            AI-powered companion.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-in-right delay-400">
            <button className="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 flex items-center space-x-3 animate-bounce">
              <FontAwesomeIcon
                icon={faMobile}
                className="text-xl animate-pulse"
              />
              <span>Download for Android</span>
              <span className="text-sm bg-white/20 text-white px-2 py-1 rounded-full ml-2 animate-pulse">
                Free
              </span>
            </button>
            <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center space-x-3 animate-bounce delay-100">
              <FontAwesomeIcon
                icon={faApple}
                className="text-xl animate-pulse"
              />
              <span>Download for iOS</span>
              <span className="text-sm bg-white/20 text-white px-2 py-1 rounded-full ml-2 animate-pulse">
                Free
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-600">
            <div className="text-center text-white group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 group-hover:text-green-300 animate-bounce">
                50K+
              </div>
              <div className="text-white/80">Downloads</div>
            </div>
            <div className="text-center text-white group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 group-hover:text-blue-300 animate-bounce delay-100">
                4.8⭐
              </div>
              <div className="text-white/80">App Rating</div>
            </div>
            <div className="text-center text-white group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 group-hover:text-teal-300 animate-bounce delay-200">
                95%
              </div>
              <div className="text-white/80">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
