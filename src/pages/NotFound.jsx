import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col h-screen">
        <h2>Halaman Tidak Ditemukan</h2>
        <Link to={"/"} className="py-2 px-4 text-white bg-red-700 rounded-lg">
          Kembali ke halaman awal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
