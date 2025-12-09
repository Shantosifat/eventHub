import { internalMutation } from "./_generated/server";

// Sample events data with Unsplash images
const SAMPLE_EVENTS = [
  {
    title: "React 19 Workshop: Master the New Features",
    description: `Join us for an intensive hands-on workshop diving deep into React 19's revolutionary features! Bring your laptop and be ready to code. Light refreshments included.`,
    category: "tech",
    tags: ["tech", "react", "javascript", "frontend"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Bashundhara+City+Shopping+Complex",
    address: "Bashundhara City, Panthapath, Dhaka",
    capacity: 50,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI & Machine Learning Meetup - Building with LLMs",
    description: `Learn how to integrate Large Language Models into your applications! Network with AI enthusiasts, attend demos, and ask questions.`,
    category: "tech",
    tags: ["tech", "ai", "machine-learning", "llm"],
    city: "Chittagong",
    district: "Chattogram",
    venue: "https://maps.google.com/?q=Chittagong+IT+Hub",
    address: "Chittagong IT Hub, Agrabad, Chittagong",
    capacity: 100,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Indie Music Night - Acoustic Sessions",
    description: `Enjoy soulful acoustic performances by Bangladeshi indie artists. Open mic and meet & greet included.`,
    category: "music",
    tags: ["music", "indie", "acoustic", "live"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Art+Center",
    address: "Dhaka Art Center, Dhanmondi, Dhaka",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Startup Networking Breakfast",
    description: `Connect with entrepreneurs and investors. Speed networking, mentor meetings, and funding insights included.`,
    category: "business",
    tags: ["business", "networking", "startup", "entrepreneurship"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Work+Square+Dhaka",
    address: "Work Square, Gulshan, Dhaka",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 300,
    coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Weekend Photography Walk - Old Dhaka",
    description: `Capture the vibrant streets and markets of Old Dhaka. Chai stops included. Suitable for all skill levels.`,
    category: "art",
    tags: ["art", "photography", "culture", "walking-tour"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Ahsan+Manzil",
    address: "Ahsan Manzil, Shabagh, Dhaka",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 700,
    coverImage: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Full Stack Development Bootcamp - Day 1",
    description: `Kickstart your journey to becoming a full-stack developer. Laptop required. Materials provided.`,
    category: "education",
    tags: ["education", "coding", "fullstack", "beginner"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=North+South+University",
    address: "North South University, Bashundhara, Dhaka",
    capacity: 30,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Sunday Football Tournament",
    description: `5-a-side football tournament for amateurs. Referee and medical support provided.`,
    category: "sports",
    tags: ["sports", "football", "tournament", "fitness"],
    city: "Chittagong",
    district: "Chattogram",
    venue: "https://maps.google.com/?q=Bangabandhu+Stadium+Chittagong",
    address: "Bangabandhu Stadium, Chittagong",
    capacity: 56,
    ticketType: "paid",
    ticketPrice: 350,
    coverImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Healthy Cooking Workshop - Bangladeshi Plant-Based Cuisine",
    description: `Learn to cook nutritious, plant-based Bangladeshi dishes. Ingredients and equipment provided.`,
    category: "food",
    tags: ["food", "cooking", "health", "vegan"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Bangladesh+Cooking+Studio",
    address: "Bangladesh Cooking Studio, Dhanmondi, Dhaka",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 1200,
    coverImage: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Morning Yoga & Meditation Retreat",
    description: `60-min Hatha Yoga + 30-min guided meditation. Suitable for all levels. Yoga mats provided.`,
    category: "health",
    tags: ["health", "yoga", "meditation", "wellness"],
    city: "Sylhet",
    district: "Sylhet",
    venue: "https://maps.google.com/?q=Tea+Garden+Retreat+Sylhet",
    address: "Tea Garden Retreat, Sylhet",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 450,
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Gaming Tournament - Valorant Championship",
    description: `16 teams compete in a 5v5 Valorant tournament. High-spec PCs provided.`,
    category: "gaming",
    tags: ["gaming", "esports", "valorant", "tournament"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Game+Arena+Dhaka",
    address: "Game Arena, Gulshan, Dhaka",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 200,
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Women in Tech: Leadership Panel Discussion",
    description: `Inspiring stories from Bangladeshi women leaders in tech. Q&A and networking lunch included.`,
    category: "networking",
    tags: ["networking", "women-in-tech", "leadership", "career"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Grameen+Phone+Office+Dhaka",
    address: "Grameen Phone Office, Gulshan, Dhaka",
    capacity: 40,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Trekking in Srimangal - Tea Garden Adventure",
    description: `Beginner-friendly trekking in the tea gardens of Srimangal. Includes guide, meals, and camping gear.`,
    category: "outdoor",
    tags: ["outdoor", "trekking", "adventure", "camping"],
    city: "Srimangal",
    district: "Moulvibazar",
    venue: "https://maps.google.com/?q=Srimangal+Tea+Gardens",
    address: "Srimangal Tea Gardens, Moulvibazar",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Community Clean-up Drive - Riverbank Edition",
    description: `Help keep our rivers clean! Gloves, bags, and refreshments provided.`,
    category: "community",
    tags: ["community", "environment", "volunteer"],
    city: "Khulna",
    district: "Khulna",
    venue: "https://maps.google.com/?q=Shyamnagar+Riverbank",
    address: "Shyamnagar Riverbank, Khulna",
    capacity: 100,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "JavaScript Performance Optimization Masterclass",
    description: `Advanced JS performance techniques. Intermediate JS knowledge required. Laptop with Node.js needed.`,
    category: "tech",
    tags: ["tech", "javascript", "performance", "advanced"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=BUET+Dhaka",
    address: "BUET, Dhaka",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 999,
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Indie Game Dev Jam - 48 Hour Challenge",
    description: `Create a game in 48 hours. Solo or team participation (max 4). Mentorship included.`,
    category: "gaming",
    tags: ["gaming", "game-development", "hackathon", "indie"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Bangalore+International+Centre", // placeholder
    address: "Dhaka Game Lab, Banani, Dhaka",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI Product Building Workshop - From Idea to MVP",
    description: `Hands-on workshop to build AI products: chatbots, recommendation engines, document summarizers.`,
    category: "tech",
    tags: ["tech", "ai", "product", "startup"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Innovation+Hub",
    address: "Dhaka Innovation Hub, Gulshan, Dhaka",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Startup Founder's Breakfast - Funding & Growth",
    description: `Breakfast with Bangladeshi startup founders. Panel discussion and networking included.`,
    category: "business",
    tags: ["business", "startup", "networking", "entrepreneurship"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Work+Square+Dhaka",
    address: "Work Square, Gulshan, Dhaka",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 400,
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Photography Masterclass - Portrait & Street",
    description: `2-day masterclass for portrait and street photography. DSLR required. Snacks included.`,
    category: "art",
    tags: ["art", "photography", "workshop", "creative"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Art+Center",
    address: "Dhaka Art Center, Dhanmondi, Dhaka",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Corporate Cricket Tournament - Season 3",
    description: `Corporate cricket tournament. T10 format, prizes for top teams. Team jerseys and refreshments included.`,
    category: "sports",
    tags: ["sports", "cricket", "corporate", "tournament"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Mirpur+Stadium",
    address: "Mirpur Stadium, Dhaka",
    capacity: 180,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Mindfulness & Stress Management for Professionals",
    description: `Learn evidence-based mindfulness techniques to reduce stress, improve focus, and boost productivity.`,
    category: "health",
    tags: ["health", "wellness", "mindfulness", "corporate"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Wellness+Studio",
    address: "Dhaka Wellness Studio, Banani, Dhaka",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 900,
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Pizza Palooza: A Slice of Heaven",
    description: `Pizza making and tasting workshop. Learn dough secrets and toppings. Fun for all ages!`,
    category: "food",
    tags: ["food"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Cooking+Studio+Dhaka",
    address: "Cooking Studio, Dhanmondi, Dhaka",
    capacity: 10,
    ticketType: "free",
    coverImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1080&q=80",
    themeColor: "#831843",
  },
  {
    title: "React & Next.js: Building the Future of Web Applications",
    description: `Explore React and Next.js advancements, server-side rendering, and best practices for scalable applications.`,
    category: "tech",
    tags: ["tech"],
    city: "Dhaka",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Innovation+Lab",
    address: "Dhaka Innovation Lab, Gulshan, Dhaka",
    capacity: 75,
    ticketType: "paid",
    ticketPrice: 250,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1080&q=80",
    themeColor: "#1e3a8a",
  }
];


// Helper functions
function getRandomFutureDate(minDays = 7, maxDays = 90) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}

function getEventEndTime(startTime) {
  const durationHours = Math.floor(Math.random() * 3) + 2;
  return startTime + durationHours * 60 * 60 * 1000;
}

function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// RUN THIS DIRECTLY FROM CONVEX DASHBOARD
// Go to Dashboard > Functions > seed:run > Run
export const run = internalMutation({
  handler: async (ctx) => {
    // First, get or create a default organizer user
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      // Create a default organizer if no users exist
      const organizerId = await ctx.db.insert("users", {
        email: "organizer@eventhub.com",
        tokenIdentifier: "seed-user-token",
        name: "EventHub Team",
        hasCompletedOnboarding: true,
        location: {
          city: "Mirpur",
          district: "Dhaka",
          country: "Bangladesh",
        },
        interests: ["tech", "music", "business"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(organizerId);
    }

    const createdEvents = [];

    for (const eventData of SAMPLE_EVENTS) {
      const startDate = getRandomFutureDate();
      const endDate = getEventEndTime(startDate);
      const registrationCount = Math.floor(
        Math.random() * eventData.capacity * 0.7
      );

      const event = {
        ...eventData,
        slug: generateSlug(eventData.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        startDate,
        endDate,
        timeZone: "Asia/Dhaka",
        locationType: "physical",
        country: "Bangladesh",
        registrationCount,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const eventId = await ctx.db.insert("events", event);
      createdEvents.push(eventData.title);
    }

    console.log(`✅ Successfully seeded ${createdEvents.length} events!`);
    return {
      success: true,
      count: createdEvents.length,
      events: createdEvents,
    };
  },
});

// Optional: Clear all events
export const clear = internalMutation({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    let count = 0;

    for (const event of events) {
      const regs = await ctx.db
        .query("registrations")
        .withIndex("by_event", (q) => q.eq("eventId", event._id))
        .collect();

      for (const reg of regs) {
        await ctx.db.delete(reg._id);
      }

      await ctx.db.delete(event._id);
      count++;
    }

    console.log(`🗑️ Cleared ${count} events`);
    return { success: true, deleted: count };
  },
});