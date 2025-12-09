import { City, State } from "country-state-city";

export function createLocationSlug(city, district) {
  if (!city || !district) return "";

  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  const districtSlug = district.toLowerCase().replace(/\s+/g, "-");

  return `${citySlug}-${districtSlug}`;
}

export function parseLocationSlug(slug) {
  if (!slug || typeof slug !== "string") {
    return { city: null, district: null, isValid: false };
  }

  const parts = slug.split("-");

  // Must have at least 2 parts (city-state)
  if (parts.length < 2) {
    return { city: null, district: null, isValid: false };
  }

  // Parse city (first part)
  const cityName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

  // Parsestate (remaining parts joined)
  const districtName = parts
    .slice(1)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

  // // Special case: Dhaka
  // if (
  //   cityName.toLowerCase() === "dhaka" &&
  //  stateName.toLowerCase() === "dhaka"
  // ) {
  //   return { city: "Dhaka",state: "Dhaka", isValid: true };
  // }

  // Validatestate only
  // const bdDistricts = State.getStatesOfCountry("BD");
  // conststateExists = bdDistricts.find(
  //   (d) => d.name.toLowerCase() ===stateName.toLowerCase()
  // );

  // if (!districtExists) {
  //   return { city: null,state: null, isValid: false };
  // }

  // Optionally skip city validation for otherstates
  return {
    city: cityName,
    district: districtName,
    isValid: true,
  };
}
