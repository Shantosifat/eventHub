"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { getCategoryIcon, getCategoryLabel } from "@/lib/data";
import { useUser } from "@clerk/nextjs";
import { format } from "date-fns";
import { Calendar, Clock, ExternalLink, Loader2, MapPin } from "lucide-react";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const EventPage = () => {
  const params = useParams();
  const router = useRouter();

  const { user } = useUser();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { data: event, isLoading } = useConvexQuery(api.events.getEventBySlug, {
    slug: params.slug,
  });

  const { data: registration } = useConvexQuery(
    api.registrations.checkRegistration,
    event?._id ? { eventId: event._id } : "skip"
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  if (!event) {
    notFound();
  }

  return (
    <div
      style={{ backgroundColor: event.themeColor || "#1e3a8a" }}
      className="min-h-screen -mt-6 md:-mt-16"
    >
      {/* ui */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Event Title & Info */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">
            {getCategoryIcon(event.category)} {getCategoryLabel(event.category)}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{format(event.startDate, "EEEE, MMMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>
                {format(event.startDate, "h:mm a")} -{" "}
                {format(event.endDate, "h:mm a")}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {event.coverImage && (
          <div className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-6">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* All details */}
      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        {/* Main content */}
        <div className="space-y-8">
          {/* description */}
          <Card
            className={"pt-0"}
            style={{
              backgroundColor: event.themeColor || "#1e3a8a",
            }}
          >
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>

          {/* location deatils */}

          <Card
            className={"pt-0"}
            style={{
              backgroundColor: event.themeColor || "#1e3a8a",
            }}
          >
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-500" />
                Location
              </h2>

              <div className="space-y-3">
                <p className="font-medium">
                  {event.city}, {event.state || event.country}
                </p>
                {event.address && (
                  <p className="text-sm text-muted-foreground">
                    {event.address}
                  </p>
                )}
                {event.venue && (
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href={event.venue}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* organizer info */}
          <Card
              className={"pt-0"}
              style={{
                backgroundColor: event.themeColor
                  || "#1e3a8a",
              }}
            >
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Organizer</h2>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {event.organizerName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{event.organizerName}</p>
                    <p className="text-sm text-muted-foreground">
                      Event Organizer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        {/* sidebar - registratyion card */}
        <div className="lg:sticky lg:top-24 h-fit"></div>
      </div>

      {/* register modal */}
    </div>
  );
};

export default EventPage;
