import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-600/5 font-sans">
      <header className="w-full bg-sky-600 text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-3">
          <div className="flex flex-col justify-center text-xs text-sky-50/90">
            <span className="text-[11px] uppercase tracking-wide text-sky-100">
              Location
            </span>
            <span className="flex items-center gap-1 text-sm font-medium">
              <span className="text-base">📍</span>
              All Ethiopia
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-sky-600 shadow-sm">
              F
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold">Furniture</span>
              <span className="text-[11px] text-sky-100">
                Online marketplace
              </span>
            </div>
          </div>

          <div className="flex flex-1 items-stretch rounded-full bg-white text-sm text-zinc-700 shadow-sm">
            <button className="flex items-center gap-2 rounded-l-full bg-white px-4 text-sm font-medium text-zinc-800">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-semibold text-zinc-900">
                G
              </span>
              <span>General</span>
              <span className="ml-1 text-xs text-zinc-500">▾</span>
            </button>
            <div className="flex flex-1 items-center border-l border-zinc-200 px-4">
              <Input
                placeholder="I am looking for..."
                className="h-9 w-full border-none px-0 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <button className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-zinc-900 hover:bg-amber-500">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Button
              size="lg"
              className="h-10 rounded-full bg-amber-400 px-6 text-sm font-semibold text-zinc-900 hover:bg-amber-500"
            >
              Sell
            </Button>
            <button className="hidden text-sm font-medium text-sky-50 md:inline">
              Register
            </button>
            <button className="hidden items-center gap-1 rounded-full bg-sky-700 px-3 py-1 text-xs font-medium text-sky-50 md:flex">
              <span>English</span>
              <span>▾</span>
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/40 text-sm font-semibold uppercase">
              F
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <section className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-lg font-bold text-white shadow-sm">
              F
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
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
          <article className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-sm shadow-sky-50 ring-1 ring-zinc-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-50">
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

          <article className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-sm shadow-sky-50 ring-1 ring-zinc-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-50">
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
      </main>
    </div>
  );
}
