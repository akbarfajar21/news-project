import React from "react";

const useDate = () => {
  const currentDate = new Date();
  const days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dayName = days[currentDate.getDay()];
  const date = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const years = currentDate.getFullYear();

  return { dayName, date, monthName, years };
};

export default useDate;
