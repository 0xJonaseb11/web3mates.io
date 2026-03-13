"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    image: "/s1.svg",
    title: "Web3 Training & Education",
    description:
      "We equip learners with the fundamentals of blockchain, smart contracts, and decentralized tools through tailored bootcamps and courses.",
    link: "/services/training",
  },
  {
    id: 2,
    image: "/s2.svg",
    title: "Hackathons & Bootcamps",
    description:
      "Hands-on events that bring developers together to solve real-world African problems using Web3 technologies.",
    link: "/services/hackathons",
  },
  {
    id: 3,
    image: "/s3.svg",
    title: "Mentorship & Coaching",
    description:
      "We connect rising talent with experienced Web3 mentors to guide their learning, growth, and career journey.",
    link: "/services/mentorship",
  },
  {
    id: 4,
    image: "/s4.svg",
    title: "Startup & Business Support",
    description:
      "Early-stage support for Web3-focused startups through technical guidance, advisory, and strategic growth sessions.",
    link: "/services/startup",
  },
  {
    id: 5,
    image: "/s5.svg",
    title: "Networking & Community Events",
    description:
      "We organize meetups and events across Africa to foster collaboration, learning, and shared growth in the ecosystem.",
    link: "/services/networking",
  },
  {
    id: 6,
    image: "/s6.svg",
    title: "Access to Funding & Opportunities",
    description:
      "We help projects discover grants, pitch competitions, and partner funds aligned with Web3 innovation in Africa.",
    link: "/services/funding",
  },
];

const ServicesFeatures = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            Fostering Collaboration, Building Excellence.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto">
            Explore the core services we&apos;re building at Web3 Mates to empower
            the next generation of Web3 creators, developers, and startups
            across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-32 sm:h-40 lg:h-48 w-full">
                <Image
                  src={service.image}
                  alt={`${service.title} Icon`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-[#0B1C39] group-hover:text-[#0066FF] transition-colors">
                  {service.id}. {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
