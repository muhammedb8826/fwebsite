"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const demoImages = [
  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1617096527330-249c35b08d19?auto=format&fit=crop&w=1200&q=80",
];

const similarProducts = [
  {
    id: 5,
    title: "Office Table",
    price: "Br 30,000",
    location: "Addis Ababa, Ethiopia",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
    tags: ["TABLE", "SLIGHTLY USED"],
  },
  {
    id: 6,
    title: "Dining Table",
    price: "Br 50,000",
    location: "Addis Ababa",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    tags: ["TABLE", "NEW"],
  },
  {
    id: 7,
    title: "Display Cabinet",
    price: "Br 15,000",
    location: "Addis Ababa, Ethiopia",
    image:
      "https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=800&q=80",
    tags: ["OTHERS", "USED"],
  },
  {
    id: 8,
    title: "Sofa Table",
    price: "Br 6,500",
    location: "Addis Ababa",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
    tags: ["TABLE", "NEW"],
  },
];

export default function ProductDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const currentImage = demoImages[activeIndex] ?? demoImages[0];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % demoImages.length);
  };

  return (
    <div className="bg-muted/40 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
          {/* Left: gallery */}
          <section className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div className="relative flex-1 rounded-2xl bg-muted">
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-muted"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-muted"
              >
                ›
              </button>

              <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-muted md:h-96">
                <Image
                  src={currentImage}
                  alt="Office furniture"
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              {demoImages.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-16 w-20 overflow-hidden rounded-xl border ${
                    index === activeIndex
                      ? "border-primary"
                      : "border-zinc-200 hover:border-zinc-300"
                  } bg-muted`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Right: details */}
          <aside className="flex flex-col gap-4">
            <div className="space-y-1 rounded-2xl bg-white p-4 shadow-sm">
              <h1 className="text-lg font-semibold text-zinc-900">
                Office Furniture
              </h1>
              <p className="text-xs text-muted-foreground">
                <span className="mr-3">👁️ 320 views</span>
                <span>• Posted 2 years ago</span>
              </p>
            </div>

            <div className="space-y-2 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Negotiable
              </p>
              <p className="text-2xl font-semibold text-zinc-900">Br 8,500</p>
            </div>

            <div className="space-y-4 rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-3xl">
                🏬
              </div>
              <Button
                type="button"
                onClick={() => setShowContact((prev) => !prev)}
                className="h-11 w-full rounded-full bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                {showContact ? "Call: +251 91 234 5678" : "Show Contact"}
              </Button>
            </div>
          </aside>
        </div>

        {/* Similar products */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900">
            Similar Products
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {similarProducts.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm shadow-muted/60 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform group-hover:scale-[1.02]"
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
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

