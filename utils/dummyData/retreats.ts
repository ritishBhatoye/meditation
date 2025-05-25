export type Retreat = {
  id: number;
  title: string;
  description: string;
  location: string;
  duration: string;
  highlights: string[];
  startDate: string; // ISO format
  endDate: string; // ISO format
  availability:
    | "Available"
    | "Few Spots Left"
    | "Fully Booked"
    | "Early Bird Discount";
  image: string;
  category: string;
  bookingLink: string;
  infoLink: string;
};

export const retreats: Retreat[] = [
  {
    id: 1,
    title: "7-Day Silent Meditation",
    description:
      "A transformative week of silence, mindfulness, and deep meditation in the mountains.",
    location: "Rishikesh, India",
    duration: "7 Days",
    highlights: [
      "Silent practice",
      "Guided meditations",
      "Nature walks",
      "Detox sessions",
    ],
    startDate: "2024-07-10T09:00:00Z",
    endDate: "2024-07-17T12:00:00Z",
    availability: "Few Spots Left",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    category: "Meditation",
    bookingLink: "#",
    infoLink: "#",
  },
  {
    id: 2,
    title: "Healing Through Yoga",
    description:
      "A holistic retreat focused on yoga, breathwork, and emotional healing.",
    location: "Bali, Indonesia",
    duration: "5 Days",
    highlights: [
      "Personalized yoga routines",
      "Group therapy",
      "Sound healing",
      "Healthy meals",
    ],
    startDate: "2024-08-05T09:00:00Z",
    endDate: "2024-08-10T12:00:00Z",
    availability: "Early Bird Discount",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    category: "Yoga",
    bookingLink: "#",
    infoLink: "#",
  },
  {
    id: 3,
    title: "Nature & Breathwork Retreat",
    description:
      "Reconnect with nature and your breath in this immersive outdoor retreat.",
    location: "Lake Tahoe, USA",
    duration: "3 Days",
    highlights: [
      "Breathwork sessions",
      "Forest bathing",
      "Campfire circles",
      "Mindful hiking",
    ],
    startDate: "2024-09-15T09:00:00Z",
    endDate: "2024-09-18T12:00:00Z",
    availability: "Available",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    category: "Breathwork",
    bookingLink: "#",
    infoLink: "#",
  },
  {
    id: 4,
    title: "Emotional Healing Intensive",
    description:
      "A safe space for deep emotional release, group therapy, and self-discovery.",
    location: "Tuscany, Italy",
    duration: "4 Days",
    highlights: [
      "Group therapy",
      "Art therapy",
      "Guided journaling",
      "Mindful movement",
    ],
    startDate: "2024-10-01T09:00:00Z",
    endDate: "2024-10-05T12:00:00Z",
    availability: "Fully Booked",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    category: "Emotional Healing",
    bookingLink: "#",
    infoLink: "#",
  },
];
