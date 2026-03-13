import Image from "next/image";

const CollaborationStories = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Collaboration in Action
          </h2>
          <p className="text-gray-600 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            At Web3 Mates, we&apos;re working to build partnerships that empower
            talent, connect communities, and help shape Africa&apos;s future in
            Web3. Together with our top collaborator Genesys, we&apos;re creating
            opportunities for developers across the continent. Here&apos;s a look at
            some of the initiatives we aim to launch soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40 sm:h-64 lg:h-[400px]">
              <Image
                src="/big.svg"
                alt="University Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-3 sm:mb-4">
                Empowering Young Developers Through University Collaborations
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                We plan to collaborate with local universities to organize Web3
                bootcamps focused on hands-on training in smart contracts,
                blockchain architecture, and dApp development — with the goal of
                reaching hundreds of students across East Africa.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Coming Soon</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-3 sm:p-4">
              <div className="relative w-full sm:w-48 h-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/c1.svg"
                  alt="Hackathon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-1 sm:mb-2">
                  Cross-Border Hackathon to Unite African Talent
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                  We&apos;re preparing to host our first Pan-African Web3
                  hackathon — bringing together developers from across the
                  continent to co-create meaningful blockchain solutions.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Planned for 2025</p>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-3 sm:p-4">
              <div className="relative w-full sm:w-48 h-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/c2.svg"
                  alt="Agriculture Blockchain"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-1 sm:mb-2">
                  Blockchain for Agriculture: Future Pilot Program
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                  We&apos;re exploring a pilot program to use blockchain for
                  tracking produce in agricultural co-ops — helping improve
                  transparency between farmers and buyers.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Expected in Late 2025</p>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-3 sm:p-4">
              <div className="relative w-full sm:w-48 h-24 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/c3.svg"
                  alt="Women in Web3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-1 sm:mb-2">
                  Women in Web3: A Mentorship Initiative We&apos;re Building
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                  We plan to collaborate with like-minded organizations to
                  create a mentorship pipeline for young women — guiding them
                  into Web3 development, digital finance, and entrepreneurship.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">In Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationStories;
