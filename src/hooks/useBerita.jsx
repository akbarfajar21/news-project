import axios from "axios";
import React, { useEffect, useState } from "react";

const useBerita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBerita = async () => {
    try {
      const response = await axios.get(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/"
      );
      setBerita(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return { berita, loading };
};

export default useBerita;
