import Button from "@/ui/Buttons"
import Link from "next/link"

const HeroSection = () => {
  return (
   <div    
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px] font-inter">

        <div
         className="flex flex-col h-full items-center justify-center pt-[80px] gap-20 w-[90%]
        max-w-[1450px] mx-auto">
             <div className="text-center flex flex-col gap-3">
                 <h1 className="text-7xl mb-16xl mt-18xl sm:text-10xl font-extrabold text-black">
                    Land Your {" "}
                    <span className="text-purple-600 font-extrabold">Dream Job</span>
                    , You Derserve
                 </h1>
                 <span>
                    Find the perfect job that matches your skills and passion with over 10,000
                    job listings from top companies around the world.
                    <div>Your dream career is just a click away! Start 
                    your journey toward success today.</div>
                 </span>
                 </div>

                 {/* <Link href="/jobs">
                            <Button>Search jobs</Button>
                         </Link>
 */}

        </div>
      </div>
  )
}

export default HeroSection

