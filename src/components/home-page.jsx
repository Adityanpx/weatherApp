'use client'
// Import necessary packages
import { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from './footer';

export function HomePage() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2e4b31aba9af95d08849140df2c6ce0b`);
      setTemperature(response.data.main.temp);
      setError(null);
    } catch (error) {
      setError('City not found');
      setTemperature(null);
    }
  };

  return (
    <div className="flex flex-col  mt-18 min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 mt-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Display temperature */}
              {temperature && (
                <>
                  <div className="text-5xl text-black font-bold">{temperature}°C</div>
                  <div className="text-2xl text-black font-medium">{city}</div>
                </>
              )}
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-full max-w-md">
                <form className="flex space-x-2" onSubmit={handleSearch}>
                  <Input className="flex-1" placeholder="Enter a city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                  <Button type="submit">Search</Button>
                </form>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Enter a city to get the latest weather information.</p>
              {/* Display error message */}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </section>
        {/* Other sections */}
        {/* ... */}
      </main>
      <Footer/>
    </div>
  );
}
