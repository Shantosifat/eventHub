"use client";

import EventCard from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { CATEGORIES } from "@/lib/data";
import { parseLocationSlug } from "@/lib/location-utils";
import { Loader2, MapPin } from "lucide-react";
import { notFound, useParams, useRouter } from "next/navigation";
import React from "react";

const DynamicExplorePage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  // Check if slug is a category
  const categoryInfo = CATEGORIES.find((cat) => cat.id === slug);
  const isCategory = !!categoryInfo;

  // If not a category, try parsing it as location
  const { city, district, isValid } = !isCategory
    ? parseLocationSlug(slug)
    : { city: null, district: null, isValid: false };

  // If invalid category and invalid location, show 404
  if (!isCategory && !isValid) {
    notFound();
  }

  // Fetch events
  const { data: events, isLoading } = useConvexQuery(
    isCategory
      ? api.explore.getEventsByCategory
      : api.explore.getEventsByLocation,
    isCategory
      ? { category: slug, limit: 50 } // required field
      : city && district
        ? { city, district, limit: 30 }
        : "skip"
  );

  // Navigate to event details
  const handleEventClick = (eventSlug) => {
    router.push(`/events/${eventSlug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }
  console.log(events, "events");

  // Category view
  if (isCategory) {
    return (
      <>
        <div className="pb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{categoryInfo.icon}</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                {categoryInfo.label}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                {categoryInfo.description}
              </p>
              {events?.length > 0 && (
                <p className="text-muted-foreground">
                  {events.length} event{events.length !== 1 ? "s" : ""} found
                </p>
              )}
            </div>
          </div>

          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onClick={() => handleEventClick(event.slug)}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No events found in this category.
            </p>
          )}
        </div>
      </>
    );
  }

  // Location View
  return (
    <>
      <div className="pb-5">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">📍</div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">Events in {city}</h1>
            <p className="text-lg text-muted-foreground mt-2">
              {district}, Bangladesh
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="gap-2">
            <MapPin className="w-3 h-3" />
            {city}, {district}
          </Badge>
          {events && events.length > 0 && (
            <p className="text-muted-foreground">
              {events.length} event{events.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
      </div>

      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onClick={() => handleEventClick(event.slug)}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">
          No events in {city}, {district} yet.
        </p>
      )}
    </>
  );
};

export default DynamicExplorePage;
