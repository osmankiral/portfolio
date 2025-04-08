"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex-1">
      <section
        id="home"
        className="max-w-6xl mx-auto px-4 py-3 md:py-16 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1">
          <p className="text-gray-400 text-xl mb-4">Hello I am </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Osman Kıral</h1>
          <TypeAnimation
            sequence={["Full-Stack Developer", 2000, ""]}
            wrapper="span"
            speed={50}
            className="text-3xl md:text-5xl font-bold font-poppins text-amber-500 "
            repeat={Infinity}
          />

          <p className="text-gray-400 text-md mb-6 max-w-md mt-4">
            As a full stack developer, I create projects with modern
            technologies, offering user-centered and performance-driven
            solutions. I focus on building strong, efficient, and scalable
            applications in the digital world.
          </p>
          <div>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white cursor-pointer px-6 py-6">
              Hire me
            </Button>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="relative w-80 h-80 lg:w-[400px] md:block hidden">
            <Image
              src="/profile.jpg"
              alt="Profile Photo"
              width={500}
              height={500}
              className="object-cover rounded-full"
              priority
            />
          </div>
          <div className="flex items-center gap-3 mt-3 md:mt-26">
            <Button
              className="hover:bg-amber-400 hover:scale-125 transition-all duration-700 hover:text-white cursor-pointer"
              variant={"secondary"}
            >
              <Link
                href="https://github.com/osmankiral"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>

            <Button
              className="hover:bg-amber-400 hover:scale-125 transition-all duration-700 hover:text-white cursor-pointer"
              variant={"secondary"}
            >
              <Link
                href="https://www.linkedin.com/in/osmankiral/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </Link>
            </Button>

            <Button
              className="hover:bg-amber-400 hover:scale-125 transition-all duration-700 hover:text-white cursor-pointer"
              variant={"secondary"}
            >
              <Link
                href="https://www.instagram.com/kiralosm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
