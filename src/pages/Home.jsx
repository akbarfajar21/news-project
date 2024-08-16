import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import useDate from "../hooks/useDate";
import Weather from "../components/Weather";
import { PacmanLoader } from "react-spinners";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer"; // Import Footer

const Home = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dayName, date, monthName, years } = useDate();
  const [countBerita, setCountBerita] = useState(6);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 6);
      setLoadingBtn(false);
    }, 2000);
  };

  const getBerita = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/nasional`
      );
      setBerita(response.data.data);
    } catch (error) {
      console.error("Error fetching berita:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <PacmanLoader color="red" loading={loading} size={40} />
        </div>
      ) : (
        <main className="p-4 sm:p-6 md:p-10">
          <CarouselComponent />
          <h2 className="text-center text-2xl font-bold mb-8">
            Berita Nasional - {dayName}, {date} {monthName} {years}
          </h2>
          <div className="mb-8">
            <Weather city="Jakarta" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {berita.slice(0, countBerita).map((news, index) => (
              <Card key={index} news={news} index={index} />
            ))}
          </div>
          <div className="flex justify-center">
            {loadingBtn ? (
              <PacmanLoader color="red" loading={loadingBtn} size={40} />
            ) : (
              <button
                className="px-3 py-2 text-sm mt-4 sm:px-4 sm:py-2 sm:text-base md:px-6 md:py-3 md:text-lg bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                onClick={loadBerita}
              >
                Lihat Selengkapnya
              </button>
            )}
          </div>
        </main>
      )}
      <Footer /> 
    </>
  );
};

export default Home;
