import React, { useState } from "react";

const API_KEY = "fa63bb954b4c3a524faaa4187c292bb8";

export default function WeatherWidget() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric&lang=pl`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error(data.message || "Nie udało się pobrać pogody");
      }

      setWeather(data);
    } catch (err: any) {
      setError(err.message || "Wystąpił błąd");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black rounded-2xl shadow-md mt-10 bg-black">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Sprawdź pogodę
      </h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Wpisz miasto"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Szukaj
        </button>
      </div>

      {loading && <p className="text-center">Ładowanie...</p>}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{weather.name}</h3>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-3xl font-semibold">{weather.main.temp}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Ikona pogody"
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
}
