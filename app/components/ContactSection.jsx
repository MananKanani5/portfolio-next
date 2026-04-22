"use client";

import React, { useState, useEffect } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMapPinFill,
  RiPhoneFill,
} from "@remixicon/react";
import "leaflet/dist/leaflet.css";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setFormData({ name: "", phone: "", email: "", desc: "" });
          setLoading(false);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message", error);
          setLoading(false);
          toast.error("Failed to send message");
        }
      );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const L = await import("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "/leaflet/marker-icon.png",
          iconRetinaUrl: "/leaflet/marker-icon-2x.png",
          shadowUrl: "/leaflet/marker-shadow.png",
        });

        const existingMap = document.getElementById("map");
        if (!existingMap || existingMap._leaflet_id) return;

        const map = L.map("map").setView(
          [19.203152532027815, 72.83855592598071],
          16
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '<a target="_blank" href="https://maps.app.goo.gl/dtegwXpuLp3a253Q8">Open Google Maps</a>',
        }).addTo(map);

        L.marker([19.203152532027815, 72.83855592598071])
          .addTo(map)
          .bindPopup(`<b>Manan Kanani</b><br> Full Stack Developer`)
          .openPopup();
      })();
    }
  }, []);

  return (
    <section className="w-full relative bg-lighttext z-40">
      <ToastContainer position="bottom-right" newestOnTop pauseOnHover />
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <h1 className="text-5xl text-center text-secondary font-bold mb-10 animate__animated animate__fadeIn">
          Contact Me
        </h1>
        <div className="flex gap-14 max-sm:flex-col animate__animated animate__fadeIn">
          <div className="w-1/2 max-sm:w-full">
            <div className="flex flex-col gap-5">
              <a
                href="tel:+918657231186"
                className="flex items-center gap-2 w-fit hover:text-primaryHover duration-300"
              >
                <RiPhoneFill />
                +91 8657231186
              </a>
              <a
                href="mailto:kanani.manan5@gmail.com"
                className="flex items-center gap-2 w-fit hover:text-primaryHover duration-300"
              >
                <RiMailFill />
                kanani.manan5@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 w-fit hover:text-primaryHover duration-300"
              >
                <RiMapPinFill /> Kandivali (W), Mumbai, Maharashtra - 400067.
              </a>
            </div>
            <div className="flex items-center gap-5 mt-10 animate__animated animate__fadeIn">
              <a
                className="hover:scale-110 duration-300"
                href="https://github.com/MananKanani5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Manan Kanani's GitHub profile"
              >
                <RiGithubFill />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://www.linkedin.com/in/manan-kanani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Manan Kanani's LinkedIn profile"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://leetcode.com/manankanani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Manan Kanani's LeetCode profile"
              >
                <Image
                  src="/icons/leetcodeColor.svg"
                  alt="leetcode"
                  width={24}
                  height={24}
                  className="duration-300"
                />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://www.instagram.com/m_a_n_a_n_02/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Manan Kanani's Instagram profile"
              >
                <RiInstagramFill />
              </a>
              <a
                className="hover:scale-110 duration-300"
                href="https://www.facebook.com/manan.kanani.1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Manan Kanani's Facebook profile"
              >
                <RiFacebookFill />
              </a>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="p-2 px-3 rounded-lg w-full bg-white"
                value={formData.name}
                onChange={handleChange}
                required
                pattern="^[A-Za-z\s]{2,}$"
                title="Name should be at least 2 characters long"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="p-2 px-3 rounded-lg w-full bg-white"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="^\+?[1-9]\d{1,14}$"
                title="Phone number must be in valid international format"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 px-3 rounded-lg w-full bg-white"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="desc"
                placeholder="Description"
                className="p-2 px-3 rounded-lg w-full bg-white"
                value={formData.desc}
                onChange={handleChange}
                required
                pattern="^.{15,}$"
                title="Description should be at least 15 characters long"
              />
              <button
                type="submit"
                disabled={loading}
                className={`bg-primary hover:bg-primaryHover duration-300 p-2 cursor-pointer text-lighttext rounded-lg ${
                  loading ? "opacity-50" : "opacity-100"
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 animate__animated animate__fadeIn">
          <div
            id="map"
            className="w-full h-80 rounded-2xl border-0"
            style={{ height: "320px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
