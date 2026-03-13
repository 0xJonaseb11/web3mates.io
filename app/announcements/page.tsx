



export default function AnnouncementsPage() {
  return (
    <div className="max-w-4xl mt-12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout the Latest <span className='text-blue-700'>Announcements</span></h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Announcements</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 font-medium">
            Web3 Mates is just getting started—there are no announcements yet. Stay tuned for updates and community news!
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Announcements</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center opacity-75">
          <p className="text-gray-500 font-medium">
            Once we launch, you&apos;ll see recent announcements and updates here.
          </p>
        </div>
      </section>
    </div>
  );
}