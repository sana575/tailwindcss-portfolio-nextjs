import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="flex text-black bg-gradient-to-r from-black to-orange-700 min-h-screen">
      {/* lift site    */}
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about-image.jpg"
          alt="image"
          className="py-10 duration-300 hover:scale-105"
          width={500}
          height={500}
        />
        {/* right site */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            exercitationem est unde. illum tenetur saepe expedita itaque,
            distinctio iste atque qui dolorem exercitationem aliquid.
          </p>
         
            {/* icons */}
         
          <div className="flex gap-3 max-w-[500px] m-auto py-4 mt-3 ">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-50">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-50">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-50">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-50">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
