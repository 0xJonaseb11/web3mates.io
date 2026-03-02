
import { format, parseISO } from "date-fns";

interface Channel {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  lastActivity?: string;
  isNew?: boolean;
  isOfficial?: boolean;
  tags: string[];
  icon?: string;
  joinUrl?: string;
}

export default function ChannelsPage() {
  const channels: Channel[] = [
    {
      id: "1",
      name: "Web3 Developers",
      description:
        "Discussion space for all things Web3, blockchain, and smart contract development. Share resources, ask questions, and collaborate.",
      category: "Technology",
      members: 0,
      lastActivity: "2024-06-18T14:32:00",
      isOfficial: true,
      tags: ["web3", "blockchain", "solidity", "beginners-welcome"],
      icon: "🌐",
      joinUrl: "/join/web3-devs",
    },
    {
      id: "2",
      name: "Design Thinkers",
      description:
        "For designers and creatives to share work, get feedback, and discuss UX/UI trends. Weekly design challenges and portfolio reviews.",
      category: "Creative",
      members: 0,
      lastActivity: "2024-06-17T09:15:00",
      isNew: true,
      tags: ["ui", "ux", "figma", "feedback"],
      icon: "🎨",
      joinUrl: "/join/design-thinkers",
    },
    {
      id: "3",
      name: "Startup Founders",
      description:
        "Private channel for startup founders to share experiences, ask for advice, and discuss challenges of building a business.",
      category: "Business",
      members: 0,
      lastActivity: "2024-06-15T18:45:00",
      tags: ["entrepreneurship", "funding", "growth"],
      icon: "🚀",
    },
  ];

  const categories = Array.from(
    new Set(channels.map((channel) => channel.category))
  );

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 pt-20 sm:pt-24 lg:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Community Channels
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Join topic-specific channels to connect with like-minded members
        </p>
      </div>

      <section>
        {channels.length > 0 ? (
          <div className="space-y-4 sm:space-y-6">
            {channels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
            <svg
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">
              No channels available yet
            </h3>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Community channels will be created soon. Check back later or
              suggest a channel topic!
            </p>
            <button className="mt-4 inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Coming Soon
            </button>
          </div>
        )}
      </section>

      <div className="mt-12 sm:mt-16 bg-blue-50 rounded-xl p-6 sm:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          Want to create your own channel?
        </h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          We support member-created channels for specific topics and interests.
        </p>
        <button className="px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Coming Soon
        </button>
      </div>
    </div>
  );
}

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
  
          {channel.icon && (
            <div className="flex-shrink-0 text-2xl sm:text-3xl w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              {channel.icon}
            </div>
          )}

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex flex-wrap items-center gap-2 mb-1">
                  {channel.name}
                  {channel.isOfficial && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      Official
                    </span>
                  )}
                  {channel.isNew && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  )}
                </h3>
                <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {channel.category}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {channel.members.toLocaleString()} members
              </span>
            </div>

            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              {channel.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {channel.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs sm:text-sm text-gray-500 flex items-center">
                <svg
                  className="flex-shrink-0 mr-1.5 h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Expected Launch: August 2025
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <button className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-500 bg-gray-100 cursor-not-allowed w-full">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
