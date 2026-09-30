"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../shared/Button";
import Link from "next/link";

const LINK_COLUMNS: { id: string; links: { label: string; href: string }[] }[] =
  [
    {
      id: "browse",
      links: [
        { label: "Featured Courses", href: "#" },
        { label: "Featured Categories", href: "#" },
        { label: "Business", href: "#" },
        { label: "IT", href: "#" },
        { label: "Design", href: "#" },
      ],
    },
    {
      id: "topics",
      links: [
        { label: "Development", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Finance", href: "#" },
        { label: "Sport", href: "#" },
      ],
    },
    {
      id: "company",
      links: [
        { label: "Become a Creator", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Help", href: "#" },
        { label: "About", href: "#" },
      ],
    },
  ];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-white px-6 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* newsletter */}
          <div>
            <Image
              src={"/icons/logo.svg"}
              alt="Bytespace Logo"
              width={175}
              height={40}
            />
            <p
              style={{ fontSize: "14px" }}
              className="mt-3 text-xs text-gray-700"
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex items-center gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-13 w-full max-w-96 rounded-full border border-[#CED0D3] bg-white px-5 text-base font-mono text-gray-900 placeholder:text-[#242528] focus:outline-none"
              />
              <Button type="submit">Search</Button>
            </form>

            <p
              style={{ fontSize: "12px" }}
              className="mt-5 max-w-lg leading-relaxed text-[#242528]"
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
          >
            {LINK_COLUMNS.map((col) => (
              <ul key={col.id} className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#242528]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* bottom bar */}
        <div className="mt-20 flex flex-col gap-3 border-t border-[#CED0D3] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p style={{ fontSize: "12px" }} className="text-[#242528]">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-xs text-[#242528]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
