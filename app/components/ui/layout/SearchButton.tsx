"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const value = query.trim();

    if (!value) return;

    router.push(`/search?q=${encodeURIComponent(value)}`);

    setOpen(false);
  };

  return (
    <>
      {/* Search Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-muted"
      >
        <Search size={20} />
      </button>

      {/* Search Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60">

          <div className="mx-auto mt-20 w-[calc(100%-2rem)] max-w-2xl">

            <div className="rounded-xl bg-background p-5 shadow-xl">

              {/* Header */}
              <div className="mb-4 flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  Search News
                </h2>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
                >
                  <X size={20} />
                </button>

              </div>

              {/* Search Form */}
              <form
                onSubmit={handleSearch}
                className="flex gap-2"
              >

                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  placeholder="Search news..."
                  className="h-12 min-w-0 flex-1 rounded-lg border bg-background px-4 outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  className="h-12 rounded-lg bg-primary px-6 font-semibold text-white"
                >
                  Search
                </button>

              </form>

            </div>

          </div>

        </div>
      )}
    </>
  );
}