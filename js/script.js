/**
 * Grace Backwater Villa — Site Interactions
 * Sticky header, mobile nav, scroll-reveal animations, back-to-top.
 */
(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  const backToTop = document.getElementById("back-to-top");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Sticky header on scroll */
  const SCROLL_THRESHOLD = 40;
  function updateHeaderState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    if (backToTop) {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    }
  }
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* Mobile nav toggle */
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Back to top */
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Scroll-reveal animations */
  const revealEls = document.querySelectorAll("[data-aos]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));

    /* Fallback: a fast flick or programmatic jump can carry an element past
       the viewport between observer callbacks, leaving it permanently
       hidden. Sample scroll position on every animation frame (cheap — real
       momentum scrolling fires many events while it animates) and reveal
       anything the viewport has already reached or passed. */
    let sweepQueued = false;
    const sweepViewport = () => {
      if (sweepQueued) return;
      sweepQueued = true;
      requestAnimationFrame(() => {
        sweepQueued = false;
        document.querySelectorAll("[data-aos]:not(.aos-visible)").forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("aos-visible");
            observer.unobserve(el);
          }
        });
      });
    };
    window.addEventListener("scroll", sweepViewport, { passive: true });
    window.addEventListener("resize", sweepViewport, { passive: true });
  } else {
    revealEls.forEach((el) => el.classList.add("aos-visible"));
  }
})();
