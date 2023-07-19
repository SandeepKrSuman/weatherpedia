// A function to decide the background image based on the
// id or icon from the fetched api data

export function setBackground(weatherId, iconId) {
  const id = parseInt(weatherId);

  if (id === 800) {
    return iconId === "01d" ? "clear-day" : "clear-night";
  } else if (id === 804) {
    return "overcast";
  } else if (id === 741) {
    return "fog";
  } else if (id === 762) {
    return "volcanic-ash";
  } else if (id === 771) {
    return "squall";
  } else if (id === 781) {
    return "tornado";
  }

  switch (parseInt(id / 100)) {
    case 2:
      return "thunderstorm";

    case 3:
      return "drizzle";

    case 5:
      return "rain";

    case 6:
      return "snow";

    case 7:
      return "haze";

    case 8:
      return "partly-cloudy";

    default:
      return "default-background";
  }
}
