export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-zinc-100 bg-muted/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              F
            </div>
            <span className="text-base font-semibold text-zinc-900">
              Furniture
            </span>
          </div>
          <p className="max-w-xs text-xs text-muted-foreground">
            Buy and sell furniture and more across Ethiopia with a simple, safe
            and modern marketplace experience.
          </p>
        </div>

        <div className="flex flex-1 flex-wrap gap-10 md:justify-end">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-900">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-900">
              Support
            </h3>
            <ul className="space-y-1 text-xs">
              <li>Help Center</li>
              <li>Safety tips</li>
              <li>Terms &amp; Privacy</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-900">
              Locations
            </h3>
            <ul className="space-y-1 text-xs">
              <li>Addis Ababa</li>
              <li>Adama</li>
              <li>More cities</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Furniture Market. All rights reserved.
          </span>
          <span className="hidden md:inline">Made with love in Ethiopia.</span>
        </div>
      </div>
    </footer>
  );
}

