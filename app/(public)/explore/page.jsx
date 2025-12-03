"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const ExplorePage = () => {
  // fetch current user for location
  const { data: currentUSer } = useConvexQuery(api.users.getCurrentUser);
  //   carousel autoplay
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const router = useRouter();

  const { data: featuredEvents, isLoading: loadingFeatured } = useConvexQuery(
    api.explore.getFeaturedEvents,
    { limit: 3 }
  );

  const { data: localEvents, isLoading: loadingLocal } = useConvexQuery(
    api.explore.getEventsByLocation,
    {
      city: currentUSer?.location?.city || "Cumilla",
      district: currentUSer?.location?.district || "Chittagong",
      limit: 4,
    }
  );

  const { data: popularEvents, isLoading: loadingPopular } = useConvexQuery(
    api.explore.getPopularEvents,
    { limit: 6 }
  );

  const { data: categoryCounts } = useConvexQuery(
    api.explore.getCategoryCounts
  );

  const handleEventClick = (slug) => {
    router.push(`/events/${slug}`);
  };
  return (
    <>
      <div className="pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Events</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore featured events, find whats happening locally, or browse
          events across Bangladesh
        </p>
      </div>

      {/* Featured Carousel */}

      {featuredEvents && featuredEvents.length > 0 && (
        <div className="mb-16">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {featuredEvents.map((event) => (
                <CarouselItem key={event._id}>
                  <div
                    className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleEventClick(event.slug)}
                  >
                    {event.coverImage ? (
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0" style={{backgroundColor: event.themeColor}} />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ExplorePage;
