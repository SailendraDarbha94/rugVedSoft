"use client";

import { useEffect } from "react";

interface Weather {
  cloud_pct: number;
  temp: number;
  feels_like: number;
  humidity: number;
  min_temp: number;
  max_temp: number;
  wind_speed: number;
  wind_degrees: number;
  sunrise: number;
  sunset: number;
}

const Weather = () => {
  const city = "nassau";
  //const url = "https://api.api-ninjas.com/v1/weather?city=" + city;
  const fetchWeather = async () => {
    const res = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=experience",
      {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_KEY!,
          "Content-Type": "application/json",
        },
      }
    );
    const data: Weather = await res.json();

    if (data) {
      console.log(data);
    } else {
      console.log("not found");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return <div>weather</div>;
};

export default Weather;
