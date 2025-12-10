"use client";

import { api } from "@/convex/_generated/api";
import { useConvexMutation, useConvexQuery } from "@/hooks/use-convex-query";
import { City, State } from "country-state-city";
import { debounce } from "lodash";
import { Calendar, Loader2, MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { format } from "date-fns";
import { getCategoryIcon } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { createLocationSlug } from "@/lib/location-utils";

const SearchLocationBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data: currentUser, isLoading } = useConvexQuery(
    api.users.getCurrentUser
  );
  const { mutate: updateLocation } = useConvexMutation(
    api.users.completeOnboarding
  );

  const { data: searchResults, isLoading: searchLoading } = useConvexQuery(
    api.search.searchEvents,
    searchQuery.trim().length >= 2 ? { query: searchQuery, limit: 5 } : "skip"
  );

  // Get districts
  const bangladeshiDistricts = State.getStatesOfCountry("BD");

  // Get cities based on selected districts
  const cities = useMemo(() => {
    if (!selectedDistrict) return [];
    const districts = bangladeshiDistricts.find(
      (d) => d.name === selectedDistrict
    );
    if (!selectedDistrict) return [];
    return City.getCitiesOfState("BD", districts.isoCode);
  }, [selectedDistrict, bangladeshiDistricts]);

  useEffect(() => {
    if (currentUser?.location) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedDistrict(currentUser.location.district || "");
      setSelectedCity(currentUser.location.city || "");
    }
  }, [currentUser, isLoading]);

  const debouncedSetQuery = useRef(
    debounce((value) => setSearchQuery(value), 300)
  ).current;

  const handleSearchInput = (e) => {
    const value = e.target.value;
    debouncedSetQuery(value);
    setShowSearchResults(value.length >= 2);
  };

  const handleEventClick = (slug) => {
    setShowSearchResults(false);
    setSearchQuery("");
    router.push(`/events/${slug}`);
  };

  const handleLocationSelect = async (city, district) => {
    try {
      if (currentUser?.interests && currentUser?.location) {
        await updateLocation({
          location: { city, district, country: "Bangladesh" },
          interests: currentUser.interests,
        });
      }
      const slug = createLocationSlug(city, district);
      router.push(`/explore/${slug}`);
    } catch (error) {
      console.error("Failed to update location:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div className="flex items-center">
      <div className="relative flex w-full" ref={searchRef}>
        {/* left part */}
        <div className="flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search Events"
            onFocus={() => {
              if (searchQuery.length >= 2) setShowSearchResults(true);
            }}
            onChange={handleSearchInput}
            className="pl-10 w-full h-9 rounded-none rounded-l-md"
          />
        </div>

        {/* search Results */}
        {showSearchResults && (
          <div className="absolute top-full mt-2 w-96 bg-background border rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
            {searchLoading ? (
              <div className="p-4 flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin text-purple-500" />
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="py-2">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                  SEARCH RESULTS
                </p>
                {/* search result */}
                {searchResults.map((event) => (
                  <button
                    key={event._id}
                    className="w-full px-4 py-3 hover:bg-muted/50 text-left transition-colors"
                    onClick={() => handleEventClick(event.slug)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">
                        {getCategoryIcon(event.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium mb-1 line-clamp-1">
                          {event.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {format(event.startDate, "MMM dd")}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.city}
                          </span>
                        </div>
                      </div>
                      {event.ticketType === "free" && (
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* for districts */}

      <Select
        value={selectedDistrict}
        onValueChange={(value) => {
          setSelectedDistrict(value);
          setSelectedCity("");
        }}
      >
        <SelectTrigger className="w-32 h-9 border-l-0 rounded-none">
          <SelectValue placeholder="District" />
        </SelectTrigger>
        <SelectContent>
          {bangladeshiDistricts.map((district) => (
            <SelectItem key={district.isoCode} value={district.name}>
              {district.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* for city */}
      <Select
        value={selectedCity}
        onValueChange={(value) => {
          setSelectedCity(value);
          if (value && selectedDistrict) {
            handleLocationSelect(value, selectedDistrict);
          }
        }}
        disabled={!selectedDistrict}
      >
        <SelectTrigger className="w-32 h-9  rounded-none rounded-r-md">
          <SelectValue placeholder="City" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.name} value={city.name}>
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchLocationBar;
