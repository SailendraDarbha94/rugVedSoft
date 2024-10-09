"use client";

import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuote = async () => {
    setLoading(true);
    const res = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=inspirational&humor",
      {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_KEY!,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data) {
      setQuote(data[0].quote);
      setLoading(false);
    } else {
      setQuote("Quote Not Found!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return <p className="text-lg font-mono p-2">{loading ? "Loading..." : quote}</p>;
};

export default Quote;
