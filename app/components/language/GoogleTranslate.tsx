"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };

    googleTranslateElementInit?: () => void;
  }
}

type Language = "en" | "te";

const LANGUAGE_STORAGE_KEY = "beyond-media-language";
const GOOGLE_TRANSLATE_COOKIE = "googtrans";

export default function GoogleTranslate() {
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    ) as Language | null;

    const language: Language =
      savedLanguage === "te" ? "te" : "en";

    setCurrentLanguage(language);

    document.documentElement.lang = language;

    initializeGoogleTranslate();

    // Continuously make sure Google's banner doesn't appear.
    const hideGoogleBanner = () => {
      // Google banner iframe
      document
        .querySelectorAll(
          ".goog-te-banner-frame, iframe.goog-te-banner-frame"
        )
        .forEach((element) => {
          const el = element as HTMLElement;

          el.style.display = "none";
          el.style.visibility = "hidden";
          el.style.height = "0";
          el.style.width = "0";
        });

      // Google banner wrapper
      document
        .querySelectorAll("body > .skiptranslate")
        .forEach((element) => {
          const el = element as HTMLElement;

          const iframe = el.querySelector(
            "iframe.goog-te-banner-frame"
          );

          if (iframe) {
            el.style.display = "none";
            el.style.visibility = "hidden";
            el.style.height = "0";
          }
        });

      // Google sometimes moves the page using body top.
      document.body.style.top = "0px";
      document.body.style.marginTop = "0px";

      document.documentElement.style.marginTop = "0px";
    };

    hideGoogleBanner();

    const observer = new MutationObserver(() => {
      hideGoogleBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const changeLanguage = (language: Language) => {
    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language
    );

    document.documentElement.lang = language;

    if (language === "te") {
      /*
       * Google Translate reads this cookie when the page loads.
       *
       * /en/te
       * means:
       * English -> Telugu
       */
      setGoogleTranslateCookie("/en/te");
    } else {
      /*
       * Remove Google translation completely.
       * Reloading the page restores the original English DOM.
       */
      removeGoogleTranslateCookie();
    }

    /*
     * Reloading is intentional.
     *
     * This prevents Google from leaving translated DOM fragments
     * behind when switching back to English.
     */
    window.location.reload();
  };

  return (
    <>
      {/* Google Translate widget container */}
      <div
        id="google_translate_element"
        className="google-translate-hidden"
        aria-hidden="true"
      />

      {/* Our own language selector */}
          <div className="flex shrink-0 items-center gap-1 rounded-lg border border-border bg-background p-1">
              <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  className={`rounded-md px-2 py-1 text-xs font-medium transition sm:px-3 sm:py-1.5 sm:text-sm ${currentLanguage === "en"
                      ? "bg-primary text-white"
                      : "text-text hover:bg-primary/10"
                      }`}
              >
                  EN
              </button>

              <button
                  type="button"
                  onClick={() => changeLanguage("te")}
                  className={`rounded-md px-2 py-1 text-xs font-medium transition sm:px-3 sm:py-1.5 sm:text-sm ${currentLanguage === "te"
                      ? "bg-primary text-white"
                      : "text-text hover:bg-primary/10"
                      }`}
              >
                  తెలుగు
              </button>
          </div>
    </>
  );
}

/* =========================================================
   Google Translate Initialization
   ========================================================= */

function initializeGoogleTranslate() {
  if (
    window.google?.translate?.TranslateElement
  ) {
    createGoogleTranslate();
    return;
  }

  window.googleTranslateElementInit =
    createGoogleTranslate;

  const existingScript = document.querySelector(
    'script[src*="translate.google.com/translate_a/element.js"]'
  );

  if (existingScript) {
    return;
  }

  const script = document.createElement("script");

  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  script.async = true;

  document.body.appendChild(script);
}

function createGoogleTranslate() {
  if (
    !window.google?.translate?.TranslateElement
  ) {
    return;
  }

  const container = document.getElementById(
    "google_translate_element"
  );

  if (!container) {
    return;
  }

  /*
   * Prevent creating the widget multiple times.
   */
  if (container.querySelector(".goog-te-gadget")) {
    return;
  }

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,te",
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

/* =========================================================
   Google Translate Cookie
   ========================================================= */

function setGoogleTranslateCookie(
  value: string
) {
  /*
   * Current domain
   */
  document.cookie =
    `${GOOGLE_TRANSLATE_COOKIE}=${value}; ` +
    "path=/; " +
    "SameSite=Lax";

  /*
   * Also set for subdomains.
   *
   * Useful when deployed on:
   * user.dinnusmart.com
   * beyondimedia.com
   * etc.
   */
  const hostname = window.location.hostname;

  if (
    hostname !== "localhost" &&
    !hostname.startsWith("127.0.0.1")
  ) {
    document.cookie =
      `${GOOGLE_TRANSLATE_COOKIE}=${value}; ` +
      `path=/; ` +
      `domain=.${hostname}; ` +
      "SameSite=Lax";
  }
}

function removeGoogleTranslateCookie() {
  /*
   * Delete cookie from current domain.
   */
  document.cookie =
    `${GOOGLE_TRANSLATE_COOKIE}=; ` +
    "path=/; " +
    "expires=Thu, 01 Jan 1970 00:00:00 GMT; " +
    "max-age=0";

  /*
   * Delete cookie from subdomain scope.
   */
  const hostname = window.location.hostname;

  if (
    hostname !== "localhost" &&
    !hostname.startsWith("127.0.0.1")
  ) {
    document.cookie =
      `${GOOGLE_TRANSLATE_COOKIE}=; ` +
      `path=/; ` +
      `domain=.${hostname}; ` +
      "expires=Thu, 01 Jan 1970 00:00:00 GMT; " +
      "max-age=0";
  }
}