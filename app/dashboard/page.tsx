"use client";

import { DashboardStudent } from "../components/dashboard-student/DahboardStudent";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";


export default function Dashboard() {
  return (
    <main className="bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Navbar/>
      <DashboardStudent />
      <Footer/>
    </main>
  );
}
