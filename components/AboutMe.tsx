import Image from "next/image";

const AboutMe = () => {
  const skills = [
    { name: "Frontend Development", percent: 90 },
    { name: "Backend Development", percent: 80 },
    { name: "Database Solutions", percent: 70 },
    { name: "API Development", percent: 75 },
  ];
  return (
    <section id="about" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex">
          <Image
            src="/profile.jpg"
            alt="Profile Photo"
            width={500}
            height={500}
            className="object-cover rounded-full"
            priority
          />
        </div>
        <div className="flex-1 ">
          <h2 className="text-4xl font-bold mb-4 text-amber-500">About Me</h2>
          <p className="mb-4 text-gray-500">
            I am a Computer Engineering graduate and a full stack developer. I
            develop robust, efficient, and scalable applications using modern
            technologies such as React, TypeScript, Next.js, Node.js,
            Express.js, PostgreSQL, Prisma, and Tailwind CSS. My focus is on
            delivering user-centered and performance-driven solutions, aiming to
            produce high-quality and sustainable software at every stage.
          </p>
          <p className="mb-3 text-gray-500">
            With experience in both front-end and back-end development, I strive
            to provide the best solutions by continuously staying updated with
            the latest technologies. I am passionate about creating seamless
            digital experiences and solving complex problems through innovative
            software development.
          </p>
          <div className="space-y-6 mt-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-medium">{skill.percent}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
