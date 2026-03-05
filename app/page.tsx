"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [category, setCategory] = useState<"general" | "furniture">("general");
  const [language, setLanguage] = useState<"en" | "am">("en");

  return (
    <div className="min-h-screen bg-white font-sans">
      <header
        className="w-full text-primary-foreground"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-3">
          <div className="flex flex-col justify-center text-xs text-primary-foreground/90">
            <span className="text-[11px] uppercase tracking-wide text-primary-foreground/80">
              Location
            </span>
            <span className="flex items-center gap-1 text-sm font-medium">
              <span className="text-base">📍</span>
              All Ethiopia
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-sm">
              F
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold">Furniture</span>
              <span className="text-[11px] text-sky-100">
                Online marketplace
              </span>
            </div>
          </div>

          <div className="flex flex-1 items-stretch rounded-full bg-white text-sm text-muted-foreground shadow-sm">
            <Select value={category} onValueChange={(v) => setCategory(v as typeof category)}>
              <SelectTrigger className="flex h-auto items-center gap-2 rounded-l-full border-none bg-transparent px-4 pr-2 text-sm font-medium text-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                  {category === "general" ? "G" : "F"}
                </span>
                <SelectValue
                  placeholder="Select category"
                  aria-label={category === "general" ? "General" : "Furniture"}
                >
                  {category === "general" ? "General" : "Furniture"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-1 items-center border-l border-zinc-200 px-4">
              <Input
                placeholder="I am looking for..."
                className="h-9 w-full border-none px-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <button className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground hover:bg-accent/90">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Button
              size="lg"
              className="h-10 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Sell
            </Button>
            <button className="hidden text-sm font-medium text-primary-foreground md:inline">
              Register
            </button>
            <div className="hidden md:flex">
              <Select
                value={language}
                onValueChange={(v) => setLanguage(v as typeof language)}
              >
                <SelectTrigger className="flex h-8 items-center gap-1 rounded-full border-none bg-primary/80 px-3 py-1 text-xs font-medium text-primary-foreground shadow-none hover:bg-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue aria-label={language === "en" ? "English" : "Amharic"}>
                    {language === "en" ? "English" : "Amharic"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="am">Amharic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 text-sm font-semibold uppercase">
              F
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <section className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-sm">
              F
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Furniture
              </span>
              <span className="text-sm text-zinc-500">
                Find the perfect furniture for your home
              </span>
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Explore Popular Categories
          </h1>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <article className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-sm shadow-muted ring-1 ring-zinc-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-muted">
              <Image
                src="/general-icon.png"
                alt="General"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-base font-semibold text-zinc-900">
                General
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Browse all kinds of listings
              </p>
            </div>
          </article>

          <article className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-sm shadow-muted ring-1 ring-zinc-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-muted">
              <Image
                src="/furniture-icon.png"
                alt="Furniture"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-base font-semibold text-zinc-900">
                Furniture
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Sofas, beds, tables, chairs and more
              </p>
            </div>
          </article>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-semibold text-zinc-900">Trending ads</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                id: 1,
                title: "Brand New Acer Aspire 5",
                price: "Br 42,500",
                location: "Addis Ababa",
                image: "/products/acer-aspire-5.jpg",
                tags: ["ACER", "ASPIRE 5", "15\" ", "LAPTOP", "NEW"],
              },
              {
                id: 2,
                title: "Brand New HP Elitebook X360",
                price: "Br 77,000",
                location: "Addis Ababa, Ethiopia",
                image: "/products/hp-elitebook-x360.jpg",
                tags: ["HP", "ELITEBOOK X360", "I9", "16 GB", "NEW"],
              },
              {
                id: 3,
                title: "Modern Living Room Set",
                price: "Br 15,000,000",
                location: "Addis Ababa",
                image: "/products/living-room-set.jpg",
                tags: ["APARTMENT", "FOR SALE"],
              },
              {
                id: 4,
                title: "Power Inverter 1500W",
                price: "Br 8,500",
                location: "Addis Ababa",
                image: "/products/power-inverter.jpg",
                tags: ["OTHER", "ACCESSORIES", "NEW"],
              },
            ].map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm shadow-muted/60"
              >
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                  <p className="line-clamp-2 text-sm font-medium text-zinc-900">
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {item.price}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.location}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-muted px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
