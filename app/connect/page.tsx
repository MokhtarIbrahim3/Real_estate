"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: "chat",
    title: "WhatsApp",
    subtitle: "Instant, discreet communication.",
    href: "https://wa.me/201213082110",
  },
  {
    icon: "call",
    title: "Direct Line",
    subtitle: "+20 121 308 2110",
    href: "tel:+201213082110",
  },
  {
    icon: "work",
    title: "LinkedIn",
    subtitle: "Professional network & insights.",
    href: "https://www.linkedin.com/in/mokhtar-ibrahim-alex/",
  },
];

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactInfo: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await emailjs.send(
        "service_0fn5t58",
        "template_s6y1gnj",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          contact_info: formData.contactInfo,
          interest: formData.interest,
          message: formData.message,
        },
        "WYWY325cqBhiUjDZD"
      );

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        contactInfo: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send inquiry. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxC9dZfgGZNR8S79g7vFKoRugReOF1WZ4IoGehFP62UluQg8yMbrfR0IGz1Gg60COfqM_mochmt9Ek-Q5Er4g47o4jFC-DFIu2JxYJyy--2CoVjHvDliYW38GSyQEuL61E2wCNr2pilOqhNY3oILs-56wkZe-5XcxsCsJKLHXOIsnY0PXn2RjP2IodFH-zK1F17g3elcsymWxNuz4P83t1XET-IKWcs4VI96SKC3i_IJA5MfAoHOLoc-OrnKj-tVHKjmkpeQckMWn"
          alt="Background"
          fill
          className="object-cover opacity-[0.15] blur-[40px] scale-110"
          unoptimized
        />
      </div>

      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-mobile-margin max-w-[1440px] mx-auto w-full flex flex-col gap-16 md:gap-24 md:px-container-padding">
        <section className="max-w-3xl">
          <span className="font-hanken text-xs font-semibold text-secondary tracking-widest uppercase mb-4 block">
            Exclusive Advisory
          </span>

          <h1 className="font-manrope font-thin text-5xl sm:text-6xl lg:text-[64px] text-primary mb-6 leading-[1.1] tracking-[-0.02em]">
            Curate Your{" "}
            <span className="italic font-light text-primary/80">Legacy.</span>
          </h1>

          <p className="font-hanken text-[18px] leading-relaxed text-on-surface-variant max-w-xl">
            Whether you seek a coastal sanctuary or an urban masterpiece, our
            advisory team is at your disposal.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Methods */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactMethods.map((method) => (
              <Link
                key={method.title}
                href={method.href}
                target="_blank"
                className="glass-panel rounded-xl p-8 flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px] text-primary">
                    {method.icon}
                  </span>
                </div>

                <div>
                  <h3 className="font-manrope text-[24px] text-primary mb-1">
                    {method.title}
                  </h3>
                  <p className="font-hanken text-[16px] text-on-surface-variant">
                    {method.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-xl p-8 md:p-12">
              <h2 className="font-manrope font-light text-[32px] md:text-[40px] text-primary mb-10">
                Submit an Inquiry
              </h2>

              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="text-primary text-2xl mb-2">
                    Inquiry Sent ✅
                  </h3>
                  <p className="text-on-surface-variant">
                    We will contact you soon.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <input
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input"
                  />

                  <input
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input"
                  />

                  <input
                    id="contactInfo"
                    placeholder="Email or Phone"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    className="input"
                  />

                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select Interest</option>
                    <option value="north_coast">North Coast</option>
                    <option value="cairo">Cairo</option>
                    <option value="new_capital">New Capital</option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input"
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-primary text-white px-6 py-4 rounded-full"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}