






'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer */}
      <footer className="w-full py-6 px-4 text-center text-md font-medium bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-blue-100 border-t border-blue-500/20 shadow-inner backdrop-blur-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-200">BluePrint</span> — IT
        Department Use Only
      </footer>

      {/* Floating Scroll-To-Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 cursor-pointer bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white p-3 rounded-full shadow-lg shadow-blue-400/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce-slow"
          aria-label="Go to top"
        >
          <ArrowUp size={22} />
        </button>
      )}

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </>
  );
}
