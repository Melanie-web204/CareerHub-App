import Link from "next/link";
import Button from "@/ui/Buttons"; // Adjust path if necessary

const ComingSoonPage = () => {
  return (
    <div
      id="coming-soon"
      className="h-screen w-full bg-[url('/hero.png')] bg-cover bg-center font-inter flex items-center justify-center text-white"
      // IMPORTANT: Replace '/space-galaxy-bg.jpg' with the actual path to your desired background image.
      // Make sure this image is in your `public` folder or accessible.
    >
      <div
        className="flex flex-col items-center text-center gap-6 md:gap-8 w-[90%] max-w-[700px] p-8 md:p-12 mx-auto
                   backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-10 border border-opacity-20 border-white rounded-xl shadow-lg
                   relative z-10" // z-10 for layering if needed
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-600 leading-tight">
          We're Crafting Something Great!
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Our new platform is coming soon, designed to help you land your dream job. Get ready for an unparalleled job-seeking experience!
        </p>

        <p className="text-sm md:text-base text-black">
          Be the first to know when we launch!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-opacity-30 border-white bg-white bg-opacity-15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto flex-grow"
          />
          <Button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Notify Me
          </Button>
        </div>

        {/* Placeholder for optional decorative elements from the image */}
        {/* These would typically be SVG elements or pseudo-elements in CSS */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Example of subtle decorative lines (can be complex with actual SVG or multiple divs) */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-purple-400 opacity-30 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-purple-400 opacity-30 rounded-br-xl"></div>
        </div>

{/* 
        <div className="flex gap-6 mt-8">
          
          <Link href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors duration-200 text-3xl">
  
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors duration-200 text-3xl">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition-colors duration-200 text-3xl">
            <i className="fab fa-instagram"></i>
          </Link>
        </div> */}

      </div>
    </div>
  );
};

export default ComingSoonPage;