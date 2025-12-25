import { internalMutation } from "./_generated/server";

// Sample events data with Unsplash images
const SAMPLE_EVENTS = [
  {
    title: "React 19 Workshop: Master the New Features",
    description: `Join us for an intensive hands-on workshop diving deep into React 19's revolutionary features! 

In this session, you'll learn about:
- The new Actions API and how it simplifies form handling
- Server Components and their impact on performance
- The improved use() hook and its practical applications
- Asset loading improvements for better UX
- Migration strategies from React 18

Whether you're a seasoned React developer or just getting started, this workshop will equip you with the knowledge to build faster, more efficient applications. Bring your laptop and be ready to code!

Light refreshments will be provided. Limited seats available.`,
    category: "tech",
    tags: ["tech", "react", "javascript", "frontend"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Bashundhara+City+Shopping+Complex",
    address: "Work Square, Gulshan, Dhaka ",
    capacity: 50,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI & Machine Learning Meetup - Building with LLMs",
    description: `Learn how to integrate Large Language Models into your applications! Network with AI enthusiasts, attend demos, and ask questions.
    
    This meetup covers:
- Introduction to LLM APIs (OpenAI, Anthropic, Google)
- Prompt engineering best practices
- Building RAG applications
- Fine-tuning strategies
- Real-world use cases and demos

Network with fellow AI enthusiasts and developers. Q&A session included.

Pizza and drinks provided!`,
    category: "tech",
    tags: ["tech", "ai", "machine-learning", "llm"],
    city: "Agrabad",
    district: "Chattogram",
    venue: "https://maps.google.com/?q=Chittagong+IT+Hub",
    address: "Chittagong IT Hub, Agrabad, Chittagong",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Indie Music Night - Acoustic Sessions",
    description: `An evening of soulful acoustic performances by indie artists from across Bangladesh!

Featuring:
- 5 handpicked indie bands
- Unplugged performances
- Open mic session (limited slots)
- Meet & greet with artists

Experience the raw talent of upcoming musicians in an intimate setting. Perfect for music lovers who appreciate authentic, heartfelt performances.

Food and beverages available for purchase at the venue.`,
    category: "music",
    tags: ["music", "indie", "acoustic", "live"],
    city: "Dhanmondi",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Art+Center",
    address: "Dhaka Art Center, Dhanmondi, Dhaka",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Startup Networking Breakfast",
    description: `Connect with entrepreneurs and investors. Speed networking, mentor meetings, and funding insights included.
    What to expect:
- Speed networking sessions
- Pitch practice opportunities
- One-on-one mentor meetings
- Funding insights from VCs
- Success stories from local founders

This is your chance to expand your professional network, find potential co-founders, or get valuable feedback on your startup idea.

Continental breakfast included in registration.`,
    category: "business",
    tags: ["business", "networking", "startup", "entrepreneurship"],
    city: "Banani",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Work+Square+Dhaka",
    address: "Banani",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 300,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Weekend Photography Walk - Old Dhaka",
    description: `Capture the vibrant streets and markets of Old Dhaka. Chai stops included. Suitable for all skill levels.
    Join our photography walk covering:
- Chandni Chowk's bustling markets
- Hidden architectural gems
- Street food and portraits
- Golden hour shooting techniques
- Post-processing tips

Suitable for all skill levels. Bring your camera (phone cameras welcome too!). Our experienced photographer will guide you through composition techniques and storytelling through images.

Chai stops included along the way!`,
    category: "art",
    tags: ["art", "photography", "culture", "walking-tour"],
    city: "Dhanmondi",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Ahsan+Manzil",
    address: "Ahsan Manzil, Shabagh, Dhaka",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 700,
    coverImage:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Full Stack Development Bootcamp - Day 1",
    description: `Kickstart your journey to becoming a full-stack developer. Laptop required. Materials provided.
    
    Day 1 covers:
- Setting up your development environment
- Git & GitHub fundamentals
- HTML5 & CSS3 essentials
- Introduction to JavaScript
- Building your first webpage

This is the first session of our 6-week bootcamp series. Perfect for beginners who want to break into tech. No prior coding experience required!

Laptop required. Course materials provided.`,
    category: "education",
    tags: ["education", "coding", "fullstack", "beginner"],
    city: "Cox's Bazar",
    district: "Chattogram",
    venue: "https://maps.google.com/?q=Coxs+Bazar+Convention+Hall",
    address: "Cox's Bazar, Chattogram",
    capacity: 30,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Sunday Football Tournament",
    description: `5-a-side football tournament for amateurs. Referee and medical support provided.
    Tournament details:
- 8 teams competing
- Round-robin + knockout format
- Prizes for top 3 teams
- Best player award
- Free jersey for all participants

Register as a team (5 players + 2 substitutes) or individually (we'll match you with a team).

Referee provided. Water and energy drinks available. Medical support on standby.`,
    category: "sports",
    tags: ["sports", "football", "tournament", "fitness"],
    city: "Srimangal",
    district: "Sylhet",
    venue: "https://maps.google.com/?q=Bangabandhu+Stadium+Chittagong",
    address: "Tea Garden Retreat, Sylhet",
    capacity: 56,
    ticketType: "paid",
    ticketPrice: 350,
    coverImage:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Healthy Cooking Workshop - Bangladeshi Plant-Based Cuisine",
    description: `Learn to cook nutritious, plant-based Bangladeshi dishes. Ingredients and equipment provided.
    Workshop includes:
- 5 complete recipes to master
- Ingredient selection tips
- Meal prep strategies
- Nutritional balancing
- Recipe booklet to take home

Our chef instructor will guide you through preparing a full plant-based meal from appetizer to dessert. All ingredients and cooking equipment provided.

Taste everything you cook! Great for health enthusiasts and curious foodies alike.`,
    category: "food",
    tags: ["food", "cooking", "health", "vegan"],
    city: "Srimangal",
    district: "Sylhet",
    venue: "https://maps.google.com/?q=Bangladesh+Cooking+Studio",
    address: "Tea Garden Retreat, Sylhet",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 1200,
    coverImage:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Morning Yoga & Meditation Retreat",
    description: `60-min Hatha Yoga + 30-min guided meditation. Suitable for all levels. Yoga mats provided.
    Session includes:
- 60-minute Hatha Yoga practice
- 30-minute guided meditation
- Breathing techniques (Pranayama)
- Sound healing session
- Healthy breakfast

Suitable for all levels - modifications provided for beginners. Our certified instructor creates a welcoming space for everyone.

Yoga mats provided. Please wear comfortable clothing.`,
    category: "health",
    tags: ["health", "yoga", "meditation", "wellness"],
    city: "Rangpur City",
    district: "Rangpur",
    venue: "https://maps.google.com/?q=Tea+Garden+Retreat+Sylhet",
    address: "Rangpur",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 450,
    coverImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Gaming Tournament - Valorant Championship",
    description: `16 teams compete in a 5v5 Valorant tournament. High-spec PCs provided.
    Tournament format:
- 16 teams (5v5)
- Single elimination bracket
- Best of 3 matches
- Prize pool: ₹50,000
- Live streaming on Twitch

All skill levels welcome. Bring your own peripherals (mouse, headset). High-spec PCs and stable internet provided.

Energy drinks and snacks available. Exciting commentary and crowd interaction!`,
    category: "gaming",
    tags: ["gaming", "esports", "valorant", "tournament"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Game+Arena+Dhaka",
    address: "Game Arena, Gulshan, Dhaka",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 200,
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Women in Tech: Leadership Panel Discussion",
    description: `Inspiring stories from Bangladeshi women leaders in tech. Q&A and networking lunch included.
    Panel features:
- CTOs from top startups
- Engineering managers from FAANG
- Successful tech entrepreneurs
- VC partners focusing on women-led startups

Topics covered:
- Breaking barriers in tech
- Building inclusive teams
- Work-life integration
- Career growth strategies
- Mentorship importance

Open to all genders. Q&A session and networking lunch included.`,
    category: "networking",
    tags: ["networking", "women-in-tech", "leadership", "career"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Grameen+Phone+Office+Dhaka",
    address: "Grameen Phone Office, Gulshan, Dhaka",
    capacity: 40,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Trekking in Srimangal - Tea Garden Adventure",
    description: `Beginner-friendly trekking in the tea gardens of Srimangal. Includes guide, meals, and camping gear.
    Itinerary:
- Day 1: Dharamshala to Triund (9km trek)
- Overnight camping under stars
- Day 2: Sunrise view & descent

Package includes:
- Experienced trek leader
- Camping gear (tents, sleeping bags)
- All meals during trek
- First aid kit
- Photography assistance

Moderate fitness level required. Age 16+ recommended.

Transport from Sylhet available at additional cost.`,
    category: "outdoor",
    tags: ["outdoor", "trekking", "adventure", "camping"],
    city: "Srimangal",
    district: "Sylhet",
    venue: "https://maps.google.com/?q=Srimangal+Tea+Gardens",
    address: "Srimangal Tea Gardens, Moulvibazar",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Community Clean-up Drive - Riverbank Edition",
    description: `Help keep our rivers clean! Gloves, bags, and refreshments provided.
    
    Activity plan:
- Beach cleanup (2 hours)
- Waste segregation workshop
- Marine conservation talk
- Group photo session
- Certificate of participation

All cleaning materials provided. Wear comfortable clothes you don't mind getting dirty. Sunscreen and hat recommended.

Refreshments provided. A great way to give back to nature while meeting like-minded people!`,
    category: "community",
    tags: ["community", "environment", "volunteer"],
    city: "Sonadanga",
    district: "Khulna",
    venue: "https://maps.google.com/?q=Shyamnagar+Riverbank",
    address: "Shyamnagar Riverbank, Khulna",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "JavaScript Performance Optimization Masterclass",
    description: `Advanced JS performance techniques. Intermediate JS knowledge required. Laptop with Node.js needed.
    
    Topics covered:
- Memory management & garbage collection
- Event loop deep dive
- Web Workers & multithreading
- Code splitting strategies
- Bundle optimization with Webpack/Vite
- React performance patterns
- Profiling with Chrome DevTools

Intermediate JavaScript knowledge required. Bring your laptop with Node.js installed.

Code examples and cheat sheets provided.`,
    category: "tech",
    tags: ["tech", "javascript", "performance", "advanced"],
    city: "Dhanmondi",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=BUET+Dhaka",
    address: "BUET, Dhaka",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 999,
    coverImage:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Indie Game Dev Jam - 48 Hour Challenge",
    description: `Create a game in 48 hours. Solo or team participation (max 4). Mentorship included.

    Event highlights:
- Theme revealed at start
- Solo or team participation (max 4)
- Mentorship from industry devs
- Game engine workshops (Unity/Godot)
- Asset creation support
- Final showcase & judging

Prizes for:
- Best Overall Game
- Most Innovative Mechanic
- Best Art Style
- People's Choice

Sleeping bags welcome. Food and drinks provided throughout.`,
    category: "gaming",
    tags: ["gaming", "game-development", "hackathon", "indie"],
    city: "Banani",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Game+Lab+Banani",
    address: "Dhaka Game Lab, Banani, Dhaka",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "AI Product Building Workshop - From Idea to MVP",
    description: `Hands-on workshop to build AI products: chatbots, recommendation engines, document summarizers.
    
    What you'll build:
- AI-powered customer support chatbot
- Intelligent document summarizer
- Smart recommendation engine prototype

Skills covered:
- Product ideation with AI capabilities
- API integration (OpenAI, Anthropic, Google)
- Prompt engineering for production
- UI/UX for AI products
- Deployment and scaling basics

Perfect for product managers, entrepreneurs, and developers looking to add AI to their toolkit. No prior ML experience needed - we focus on practical application!

Lunch and refreshments included. Bring your laptop!`,
    category: "tech",
    tags: ["tech", "ai", "product", "startup"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Innovation+Hub",
    address: "Dhaka Innovation Hub, Gulshan, Dhaka",
    capacity: 40,
    ticketType: "paid",
    ticketPrice: 1500,
    coverImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    themeColor: "#4c1d95",
  },
  {
    title: "Startup Founder's Breakfast - Funding & Growth",
    description: `Breakfast with Bangladeshi startup founders. Panel discussion and networking included.
    
    Featured speakers:
- Series B founder sharing fundraising journey
- Angel investor revealing what they look for
- Growth hacker with proven scaling strategies
- Failed startup founder sharing lessons learned

Agenda:
- 8:00 AM - Networking breakfast
- 9:00 AM - Panel discussion
- 10:00 AM - Q&A session
- 10:30 AM - One-on-one speed networking

This intimate gathering is perfect for early-stage founders, aspiring entrepreneurs, and anyone interested in the startup ecosystem.

Continental breakfast and unlimited coffee included!`,
    category: "business",
    tags: ["business", "startup", "networking", "entrepreneurship"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Work+Square+Dhaka",
    address: "Work Square, Gulshan, Dhaka",
    capacity: 35,
    ticketType: "paid",
    ticketPrice: 400,
    coverImage:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Photography Masterclass - Portrait & Street",
    description: `2-day masterclass for portrait and street photography. DSLR required. Snacks included.
    
    Day 1 - Portrait Photography:
- Lighting setups (natural & artificial)
- Posing and directing subjects
- Camera settings for portraits
- Live model shoot session
- Post-processing in Lightroom

Day 2 - Street Photography:
- Finding compelling stories
- Composition techniques
- Candid vs posed shots
- Photo walk in Dhanmondi
- Ethics in street photography

Equipment: DSLR/Mirrorless camera required (no phone cameras for this workshop). Tripod optional.

All skill levels welcome. You'll leave with a portfolio of stunning images!

Snacks and beverages provided both days.`,
    category: "art",
    tags: ["art", "photography", "workshop", "creative"],
    city: "Dhanmondi",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Art+Center",
    address: "Dhaka Art Center, Dhanmondi, Dhaka",
    capacity: 20,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&q=80",
    themeColor: "#92400e",
  },
  {
    title: "Corporate Cricket Tournament - Season 3",
    description: `Corporate cricket tournament. T10 format, prizes for top teams. Team jerseys and refreshments included.
    
    
Tournament format:
- 12 corporate teams competing
- T10 format (10 overs per side)
- League stage + knockout rounds
- Professional umpires and scoring
- Live commentary

Prizes:
- Winner: ৳1,00,000 + Trophy
- Runner-up: ৳50,000
- Best Batsman, Bowler & Player awards

Register your company team (11 players + 4 substitutes). Individual registrations also open - we'll form mixed teams.

What's included:
- Professional cricket ground
- Match balls and equipment
- Refreshments throughout
- Team jerseys
- Photos & videos

Perfect for team building and corporate bonding!`,
    category: "sports",
    tags: ["sports", "cricket", "corporate", "tournament"],
    city: "Mirpur",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Mirpur+Stadium",
    address: "Mirpur Stadium, Dhaka",
    capacity: 180,
    ticketType: "paid",
    ticketPrice: 500,
    coverImage:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Mindfulness & Stress Management for Professionals",
    description: `Learn evidence-based mindfulness techniques to reduce stress, improve focus, and boost productivity.
    
    This workshop is designed for busy professionals who want to:
- Reduce anxiety and stress
- Improve focus and productivity
- Better manage work-life balance
- Build emotional resilience
- Enhance decision-making clarity

Session includes:
- Understanding stress response
- Guided meditation practice
- Breathing techniques for instant calm
- Mindful communication at work
- Creating daily wellness routines
- Apps and tools for continued practice

Led by a certified mindfulness coach with 10+ years of corporate wellness experience.

Yoga mats and meditation cushions provided. Wear comfortable clothing.

Healthy snacks and herbal teas included.`,
    category: "health",
    tags: ["health", "wellness", "mindfulness", "corporate"],
    city: "Banani",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Wellness+Studio",
    address: "Dhaka Wellness Studio, Banani, Dhaka",
    capacity: 25,
    ticketType: "paid",
    ticketPrice: 900,
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    themeColor: "#831843",
  },
  {
    title: "Pizza Palooza: A Slice of Heaven",
    description: `Pizza making and tasting workshop. Learn dough secrets and toppings. Fun for all ages!`,
    category: "food",
    tags: ["food"],
    city: "Dhanmondi",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Cooking+Studio+Dhaka",
    address: "Cooking Studio, Dhanmondi, Dhaka",
    capacity: 10,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1080&q=80",
    themeColor: "#831843",
  },
  {
    title: "React & Next.js: Building the Future of Web Applications",
    description: `Explore React and Next.js advancements, server-side rendering, and best practices for scalable applications.`,
    category: "tech",
    tags: ["tech"],
    city: "Gulshan",
    district: "Dhaka",
    venue: "https://maps.google.com/?q=Dhaka+Innovation+Lab",
    address: "Dhaka Innovation Lab, Gulshan, Dhaka",
    capacity: 75,
    ticketType: "paid",
    ticketPrice: 250,
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1080&q=80",
    themeColor: "#1e3a8a",
  },
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
