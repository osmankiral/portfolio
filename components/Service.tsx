import React from "react";
import {
  FaPencilRuler,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaCloud,
  FaDatabase,
  FaLock,
  FaCode,
} from "react-icons/fa";

const servicesData = [
    {
      id: 1,
      icon: <FaLaptopCode size={40} className="text-blue-500" />,
      title: "Frontend Development",
      description:
        "I develop modern, high-performance user interfaces using React, TypeScript, and Next.js. My focus is on creating responsive, dynamic, and fast-loading applications for the best user experience.",
    },
    {
      id: 2,
      icon: <FaServer size={40} className="text-blue-500" />,
      title: "Backend Development",
      description:
        "I create secure and scalable backend solutions using Node.js and Express.js. My backend services include API development, data processing, and server management.",
    },
    {
      id: 3,
      icon: <FaDatabase size={40} className="text-blue-500" />,
      title: "Database Solutions",
      description:
        "I manage databases efficiently using PostgreSQL and Prisma ORM, simplifying complex data operations. I ensure data is organized, secure, and optimized for high performance.",
    },
    {
      id: 4,
      icon: <FaCode size={40} className="text-blue-500" />,
      title: "API Development",
      description:
        "I build robust and scalable RESTful APIs using Node.js and Express.js to ensure seamless communication between web applications and external systems.",
    },
  ];
  
  

const Service = () => {
  return (
    <section className="py-10" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-amber-500 font-bold">Services</h2>
          <p className="text-gray-500 mt-2">
            As a full stack developer, I provide end-to-end solutions that
            enhance user experience and drive business growth. From concept to
            execution, I focus on delivering seamless and scalable applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              className="border rounded-lg p-6 flex flex-col items-start transform transition duration-500 hover:scale-105"
              key={service.id}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Service;
