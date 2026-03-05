import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
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
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=240&q=80"
                alt="General furniture"
                width={80}
                height={80}
                className="h-full w-full object-cover"
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
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=240&q=80"
                alt="Living room furniture"
                width={80}
                height={80}
                className="h-full w-full object-cover"
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
                title: "Premium Office Chair with Lumbar Support",
                price: "Br 12,500",
                location: "Addis Ababa",
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                tags: ["OFFICE", "CHAIR", "ERGONOMIC", "NEW"],
              },
              {
                id: 2,
                title: "Modern L‑Shaped Sofa Set",
                price: "Br 35,000",
                location: "Addis Ababa, Ethiopia",
                image:
                  "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
                tags: ["LIVING ROOM", "SOFA", "COMFORT"],
              },
              {
                id: 3,
                title: "6‑Seater Wooden Dining Table",
                price: "Br 27,000",
                location: "Bahir Dar",
                image:
                  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
                tags: ["DINING", "TABLE", "WOOD"],
              },
              {
                id: 4,
                title: "Spacious Four‑Door Wardrobe",
                price: "Br 18,500",
                location: "Adama",
                image:
                  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
                tags: ["BEDROOM", "WARDROBE", "STORAGE"],
              },
            ].map((item) => (
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
  );
}
