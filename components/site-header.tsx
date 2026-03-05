"use client";

import Image from "next/image";
import Link from "next/link";
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

export function SiteHeader() {
  const [category, setCategory] = useState<"general" | "furniture">("general");
  const [language, setLanguage] = useState<"en" | "am">("en");

  return (
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

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-primary shadow-sm">
            F
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold">Furniture</span>
            <span className="text-[11px] text-sky-100">Online marketplace</span>
          </div>
        </Link>

        <div className="flex flex-1 items-stretch rounded-full bg-white text-sm text-muted-foreground shadow-sm">
          <Select
            value={category}
            onValueChange={(v) => setCategory(v as typeof category)}
          >
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
                <SelectValue
                  aria-label={language === "en" ? "English" : "Amharic"}
                >
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
  );
}

