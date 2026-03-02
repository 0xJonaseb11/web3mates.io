import Image from "next/image";

const MiddleDecoration = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
  
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image src="/globe.svg" alt="Globe Icon" width={24} height={24} />
              <p className="text-[#0066FF] text-sm sm:text-base">
                Building Bridges Across Africa & Beyond
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-semibold mb-4 sm:mb-8">
              The Reach We Aspire To Achieve
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-black">
                  Partnering with Web3 companies, universities & non-profits
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-black">
                  Aiming to engage 12+ African countries in the next 2 years
                </span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-black">
                  Designed to grow impact through sustainable, human-centered
                  support
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 3h6v2H9v-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-1 sm:mb-2">$5M+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Funding Ecosystem We're Growing Toward
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-1 sm:mb-2">100+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Startups We Plan to Support</p>
            </div>


            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-1 sm:mb-2">50K+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Community Members We're Working to Reach
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-400 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm18 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8-4c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-1 sm:mb-2">25+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Collaborations We're Establishing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleDecoration;
