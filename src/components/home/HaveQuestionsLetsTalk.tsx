"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HaveQuestionsLetsTalk() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Local message instead of react-toastify
  const [banner, setBanner] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Animation states
  const [leftSideAnimated, setLeftSideAnimated] = useState(false);
  const [headingAnimated, setHeadingAnimated] = useState(false);
  const [descriptionAnimated, setDescriptionAnimated] = useState(false);
  const [formAnimated, setFormAnimated] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const showBanner = (type: "success" | "error", text: string) => {
    setBanner({ type, text });
    if (type === "success") {
      const timeout = setTimeout(() => setBanner(null), 2000);
      return () => clearTimeout(timeout);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim()) {
      showBanner("error", "Please fill in all required fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showBanner("error", "Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showBanner(
          "success",
          "Your query has been registered. Check your email!"
        );
        setSubmitted(true);
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        showBanner("error", "Failed to send. Please try again.");
      }
    } catch (err) {
      showBanner("error", "Server error. Try again later.");
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setLeftSideAnimated(true), 200);
            setTimeout(() => setHeadingAnimated(true), 400);
            setTimeout(() => setDescriptionAnimated(true), 600);
            setTimeout(() => setFormAnimated(true), 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-20"
      style={{ background: "#E5E7EA" }}
    >
      <div className="container mx-auto py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left Side - Black Placeholder */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
              leftSideAnimated
                ? "animate-left-slide-in"
                : "animate-left-slide-out"
            }`}
          >
            <div className="w-full mx-auto lg:max-w-none lg:w-full h-24 xs:h-32 sm:h-40 md:h-48 lg:h-60 xl:h-72 2xl:h-80 rounded-lg relative overflow-hidden bg-black responsive-image-container">
              <Image
                src="/logo.jpg"
                alt="Building Bharat Logo"
                fill
                className="object-fill brightness-110 contrast-110"
                sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 50vw"
                priority={false}
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              {/* Heading */}
              <h2
                className={`transition-all duration-1000 ease-out ${
                  headingAnimated
                    ? "animate-right-float-in"
                    : "animate-right-float-out"
                }`}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#005451",
                  margin: 0,
                  padding: 0,
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "512px",
                  height: "auto",
                  letterSpacing: "0px",
                }}
              >
                Have Questions? Let&apos;s Talk.
              </h2>

              {/* Description */}
              <p
                className={` transition-all duration-1000 ease-out ${
                  descriptionAnimated
                    ? "animate-right-float-in"
                    : "animate-right-float-out"
                }`}
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#0A0A0A",
                  margin: 0,
                  padding: 0,
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "512px",
                  height: "auto",
                  letterSpacing: "0px",
                }}
              >
                Exploring political consulting or have questions? Fill the form
                — we&apos;ll be in touch soon.
              </p>

              {/* Inline banner message */}
              {banner && (
                <div
                  className={`mb-4 rounded-md px-4 py-3 text-sm ${
                    banner.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {banner.text}
                </div>
              )}

              {/* Contact Form */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  formAnimated
                    ? "animate-right-float-in"
                    : "animate-right-float-out"
                }`}
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name*"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 -mt-[8px]"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "13px",
                          border: "1px solid #F97C04",
                          backgroundColor: "var(--color-grey-200, #E5E7EA)",
                          color: "#000000",
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = "#FFFFFF";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor =
                            "var(--color-grey-200, #E5E7EA)";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "13px",
                          border: "1px solid #F97C04",
                          backgroundColor: "var(--color-grey-200, #E5E7EA)",
                          color: "#000000",
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = "#FFFFFF";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor =
                            "var(--color-grey-200, #E5E7EA)";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 "
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "13px",
                          border: "1px solid #F97C04",
                          backgroundColor: "var(--color-grey-200, #E5E7EA)",
                          color: "#000000",
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = "#FFFFFF";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor =
                            "var(--color-grey-200, #E5E7EA)";
                          e.target.style.borderColor = "#F97C04";
                        }}
                      />
                    </div>

                    {/* How can we help you? */}
                    <div>
                      <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none -mt-[8px]"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "13px",
                          border: "1px solid #F97C04",
                          backgroundColor: "var(--color-grey-200, #E5E7EA)",
                          color: "#000000",
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = "#FFFFFF";
                          e.target.style.borderColor = "#F97C04";
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor =
                            "var(--color-grey-200, #E5E7EA)";
                          e.target.style.borderColor = "#F97C04";
                        }}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 -mt-[18px]"
                        style={{
                          width: "119.5px",
                          height: "48px",
                          paddingTop: "0",
                          paddingRight: "32px",
                          paddingBottom: "0",
                          paddingLeft: "32px",
                          gap: "0",
                          opacity: 1,
                          borderRadius: "8px",
                          borderWidth: "1px",
                          background:
                            "var(--color-surface-surfaceSecondary, #F1F1F1)",
                          border: "1px solid #F97C04",
                          color: "#F97C04",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontFamily: "DM Sans",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderRadius = "0px";
                          e.currentTarget.style.transform = "scale(1.05)";
                          (e.currentTarget.querySelector(
                            "svg"
                          ) as SVGElement)!.style.opacity = "1";
                          (e.currentTarget.querySelector(
                            "svg"
                          ) as SVGElement)!.style.transform = "translateX(0px)";
                          (e.currentTarget.querySelector(
                            "span"
                          ) as HTMLSpanElement)!.style.transform =
                            "translateX(8px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderRadius = "8px";
                          e.currentTarget.style.transform = "scale(1)";
                          (e.currentTarget.querySelector(
                            "svg"
                          ) as SVGElement)!.style.opacity = "0";
                          (e.currentTarget.querySelector(
                            "svg"
                          ) as SVGElement)!.style.transform =
                            "translateX(-8px)";
                          (e.currentTarget.querySelector(
                            "span"
                          ) as HTMLSpanElement)!.style.transform =
                            "translateX(0px)";
                        }}
                      >
                        {/* Right arrow icon that appears on hover */}
                        <svg
                          className="w-5 h-5 text-white transition-all duration-300 ease-in-out"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "#F97C04",
                            transition: "all 0.3s ease-in-out",
                            marginRight: "8px",
                            opacity: "0",
                            transform: "translateX(-8px)",
                            position: "absolute",
                            left: "16px",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        <span
                          style={{
                            transition: "all 0.3s ease-in-out",
                            transform: "translateX(0px)",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          Submit
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-green-600 font-semibold text-lg mb-4">
                      Thank you for your message!
                    </div>
                    <p className="text-gray-600">
                      We've received your inquiry and will get back to you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Responsive image container - Desktop default */
        .responsive-image-container {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
        }

        /* Mobile devices - reduce width with higher specificity */
        @media (max-width: 639px) {
          section .responsive-image-container {
            max-width: 280px !important;
            width: 280px !important;
            min-width: 280px !important;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          section .responsive-image-container {
            max-width: 280px !important;
            width: 280px !important;
            min-width: 280px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          section .responsive-image-container {
            max-width: 320px !important;
            width: 320px !important;
            min-width: 320px !important;
          }
        }
        .responsive-image-container img {
          width: 100% !important;
          height: 100% !important;
          object-fit: fill !important;
          object-position: center !important;
        }

        /* Device-specific responsive heights - increased height, reduced width */
        @media (max-width: 375px) {
          .responsive-image-container {
            height: 160px !important;
            min-height: 160px;
          }
        }
        /* iPhone SE specific - increase height with higher specificity */
        @media (max-width: 375px) and (max-height: 667px) {
          section .responsive-image-container {
            height: 200px !important;
            min-height: 200px !important;
          }
        }
        /* Alternative iPhone SE targeting */
        @media screen and (device-width: 375px) and (device-height: 667px) {
          section .responsive-image-container {
            height: 200px !important;
            min-height: 200px !important;
          }
        }
        /* Samsung Galaxy S8+ and similar devices - rectangular shape */
        @media (max-width: 360px) and (min-height: 700px) {
          section .responsive-image-container {
            max-width: 200px !important;
            width: 200px !important;
            min-width: 200px !important;
            height: 120px !important;
            min-height: 120px !important;
          }
        }
        @media (min-width: 376px) and (max-width: 475px) {
          .responsive-image-container {
            height: 200px !important;
          }
        }
        @media (min-width: 476px) and (max-width: 639px) {
          .responsive-image-container {
            height: 240px !important;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .responsive-image-container {
            height: 280px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .responsive-image-container {
            height: 224px !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .responsive-image-container {
            height: 288px !important;
          }
        }
        @media (min-width: 1280px) and (max-width: 1535px) {
          .responsive-image-container {
            height: 320px !important;
          }
        }
        @media (min-width: 1536px) {
          .responsive-image-container {
            height: 384px !important;
          }
        }

        /* Left side slide animations */
        @keyframes leftSlideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes leftSlideOut {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px);
            opacity: 0;
          }
        }
        /* Right side float animations */
        @keyframes rightFloatIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes rightFloatOut {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(50px);
            opacity: 0;
          }
        }
        /* Animation Classes */
        .animate-left-slide-in {
          animation: leftSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-left-slide-out {
          animation: leftSlideOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-right-float-in {
          animation: rightFloatIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-right-float-out {
          animation: rightFloatOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
      `}</style>
    </section>
  );
}
