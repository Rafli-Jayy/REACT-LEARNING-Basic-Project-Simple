import { useState, useEffect } from "react";

export function useWeather(initialCity = "Jakarta") {
  const [city, setCity] = useState(initialCity);
  const [inputCity, setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const responseData = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!responseData.ok) {
          throw new Error("Kota tidak ditemukan atau server bermasalah");
        }

        const data = await responseData.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity);
    }
  };

  return {
    city,
    inputCity,
    setInputCity,
    weatherData,
    loading,
    error,
    handleSubmit,
  };
}