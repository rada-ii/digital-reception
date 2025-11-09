import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sr", "en", "hr"],

  // Used when no locale matches
  defaultLocale: "sr",

  // Prefix strategy for locale in URL
  localePrefix: "as-needed", // Default locale (sr) won't have prefix
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
