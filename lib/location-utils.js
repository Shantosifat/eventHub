export function createLocationSlug(city, district){
    if(!city || !district)return "";
    
    const citySlug = city.toLowerCase().replace(/\s+/g, "-")
    const districtSlug = district.toLowerCase().replace(/\s+/g, "-")

    return `${citySlug}-${districtSlug}`
}