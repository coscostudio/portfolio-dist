import {
  pageAnimationTiming,
  updateProjectLcpPriority
} from "./chunk-HVZSCGIQ.js";
import {
  gsapWithCSS,
  init_live_reload
} from "./chunk-2ZU6O5O6.js";

// src/components/projects/projectFilter.ts
init_live_reload();
var defaultInitOptions = {
  initialListState: "hidden"
};
function normalizeSlug(value) {
  if (!value)
    return "";
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}
function getDefaultDisplay(element) {
  const computed = window.getComputedStyle(element);
  if (!computed)
    return "block";
  return computed.display === "none" ? "block" : computed.display;
}
var FILTER_DURATIONS = {
  fadeIn: 1,
  expand: 1.1,
  fadeOut: 0.7,
  collapse: 0.85,
  delayStep: 0.1,
  maxDelay: 0.5,
  listReveal: 1.2
};
var PROJECT_CARD_SELECTOR = ".project-div";
var PROJECT_MEDIA_SELECTOR = ".project-image, .project-video, .grid-image, .grid-video, .video-item, .video-item-prj";
var PROJECT_DESCRIPTION_SELECTOR = ".description-div";
var SERVICE_TEXT_SELECTOR = ".categories [data-filter-value], .categories .text-size-small, .project-services .text-size-small, .services-list-wrapper .text-size-small, .service-text .text-size-small, [data-filter-category], [data-filter-slug], [data-filter-value], [data-capability], [data-category]";
var CARD_ANIMATION_DISTANCE = pageAnimationTiming.distance * 1.1;
var ProjectFilterController = class {
  constructor(scope, options = {}) {
    this.listWrapper = null;
    this.triggerMap = /* @__PURE__ */ new Map();
    this.triggerHandlers = /* @__PURE__ */ new Map();
    this.cards = /* @__PURE__ */ new Map();
    this.activeFilter = "all";
    this.observer = null;
    this.refreshTimeout = null;
    this.hasRevealedList = false;
    this.initialFilterApplied = false;
    this.popStateHandler = () => {
      this.applyFilter(this.getFilterFromUrl(), { animate: true, updateUrl: false, force: true });
    };
    var _a, _b, _c;
    this.options = { ...defaultInitOptions, ...options };
    this.container = scope instanceof Document ? scope.documentElement : scope;
    const doc = scope instanceof Document ? scope : scope.ownerDocument;
    this.nav = doc == null ? void 0 : doc.querySelector(".projects-nav");
    if (scope instanceof Element) {
      this.listWrapper = (_a = scope.querySelector(".project-list-wrapper")) != null ? _a : scope.querySelector(".project-list");
    } else {
      this.listWrapper = (_c = (_b = doc == null ? void 0 : doc.querySelector(".project-list-wrapper")) != null ? _b : doc == null ? void 0 : doc.querySelector(".project-list")) != null ? _c : null;
    }
  }
  init() {
    this.hideListWrapper();
    this.collectTriggers();
    this.collectCards();
    this.observeMutations();
    window.addEventListener("popstate", this.popStateHandler);
    const initialFilter = this.getFilterFromUrl();
    this.applyFilter(initialFilter, {
      animate: false,
      updateUrl: true,
      pushState: false,
      force: true
    });
  }
  destroy() {
    this.triggerHandlers.forEach((handler, trigger) => {
      trigger.removeEventListener("click", handler);
    });
    this.triggerHandlers.clear();
    this.triggerMap.clear();
    this.cards.forEach((card) => {
      var _a;
      (_a = card.timeline) == null ? void 0 : _a.kill();
      card.timeline = void 0;
    });
    this.cards.clear();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.refreshTimeout !== null) {
      window.clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;
    }
    window.removeEventListener("popstate", this.popStateHandler);
    this.hasRevealedList = false;
    this.initialFilterApplied = false;
  }
  applyExternalFilter(slug, options = {}) {
    this.applyFilter(slug, options);
  }
  hideListWrapper() {
    var _a;
    if (!this.listWrapper) {
      this.hasRevealedList = false;
      this.initialFilterApplied = false;
      return;
    }
    const emptyState = (_a = this.listWrapper.querySelector("[data-filter-empty]")) != null ? _a : this.listWrapper.querySelector(".w-dyn-empty");
    if (this.options.initialListState === "visible") {
      gsapWithCSS.set(this.listWrapper, { autoAlpha: 1, pointerEvents: "auto", visibility: "visible" });
      if (emptyState) {
        gsapWithCSS.set(emptyState, { autoAlpha: 0, display: "none", pointerEvents: "none" });
      }
      this.hasRevealedList = true;
      this.initialFilterApplied = false;
      return;
    }
    gsapWithCSS.set(this.listWrapper, { autoAlpha: 0, pointerEvents: "none" });
    if (emptyState) {
      gsapWithCSS.set(emptyState, { autoAlpha: 0, display: "none", pointerEvents: "none" });
    }
    this.hasRevealedList = false;
    this.initialFilterApplied = false;
  }
  maybeRevealList(animate) {
    if (!this.listWrapper || this.hasRevealedList) {
      return;
    }
    const hasVisibleCard = Array.from(this.cards.values()).some((card) => card.isVisible);
    const emptyState = this.listWrapper.querySelector(".w-dyn-empty");
    if (!hasVisibleCard && !emptyState) {
      return;
    }
    this.hasRevealedList = true;
    const shouldAnimate = animate || !this.initialFilterApplied;
    if (shouldAnimate) {
      gsapWithCSS.to(this.listWrapper, {
        autoAlpha: 1,
        duration: FILTER_DURATIONS.listReveal,
        ease: "power2.out",
        pointerEvents: "auto"
      });
    } else {
      gsapWithCSS.set(this.listWrapper, { autoAlpha: 1, pointerEvents: "auto" });
    }
  }
  readElementMetrics(card) {
    const { element, defaultDisplay } = card;
    const inlineStyle = element.getAttribute("style");
    const hadInlineStyle = inlineStyle !== null;
    const computed = window.getComputedStyle(element);
    const needsReset = computed.display === "none" || element.offsetHeight === 0 || Number.isNaN(element.offsetHeight);
    if (needsReset) {
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.pointerEvents = "none";
      element.style.display = defaultDisplay || "block";
      const { width } = computed;
      if (width && width !== "auto") {
        element.style.width = width;
      }
      element.style.height = "";
      element.style.marginTop = "";
      element.style.marginBottom = "";
      element.style.paddingTop = "";
      element.style.paddingBottom = "";
    }
    const liveStyles = window.getComputedStyle(element);
    const metrics = {
      height: element.offsetHeight,
      marginTop: parseFloat(liveStyles.marginTop) || 0,
      marginBottom: parseFloat(liveStyles.marginBottom) || 0,
      paddingTop: parseFloat(liveStyles.paddingTop) || 0,
      paddingBottom: parseFloat(liveStyles.paddingBottom) || 0
    };
    if (needsReset) {
      if (hadInlineStyle) {
        element.setAttribute("style", inlineStyle);
      } else {
        element.removeAttribute("style");
      }
    }
    return metrics;
  }
  measureCard(card, force = false) {
    if (!force && card.metrics) {
      return card.metrics;
    }
    const metrics = this.readElementMetrics(card);
    card.metrics = metrics;
    return metrics;
  }
  getCardDescription(card) {
    return card.element.querySelector(PROJECT_DESCRIPTION_SELECTOR);
  }
  getCardMediaElements(card) {
    return Array.from(card.element.querySelectorAll(PROJECT_MEDIA_SELECTOR));
  }
  restoreCardVisibility(card, description, mediaItems) {
    const targets = [card.element];
    if (!description) {
      description = this.getCardDescription(card);
    }
    if (!mediaItems || !mediaItems.length) {
      mediaItems = this.getCardMediaElements(card);
    }
    if (description) {
      targets.push(description);
    }
    if (mediaItems && mediaItems.length) {
      targets.push(...mediaItems);
    }
    targets.forEach((target) => {
      if (!target)
        return;
      if (target.style.opacity && target.style.opacity !== "1") {
        target.style.opacity = "1";
      }
      if (target.style.visibility && target.style.visibility !== "visible") {
        target.style.visibility = "visible";
      }
      target.style.removeProperty("translate");
      target.style.removeProperty("rotate");
      target.style.removeProperty("scale");
      target.style.removeProperty("transform");
    });
  }
  toggleEmptyState(showEmpty) {
    var _a;
    if (!this.listWrapper)
      return;
    const emptyState = (_a = this.listWrapper.querySelector("[data-filter-empty]")) != null ? _a : this.listWrapper.querySelector(".w-dyn-empty");
    if (!emptyState) {
      return;
    }
    const defaultDisplay = getDefaultDisplay(emptyState);
    gsapWithCSS.killTweensOf(emptyState);
    if (showEmpty) {
      gsapWithCSS.set(emptyState, {
        display: defaultDisplay,
        pointerEvents: "auto"
      });
      gsapWithCSS.to(emptyState, {
        autoAlpha: 1,
        duration: 0.45,
        ease: "power2.out"
      });
    } else {
      gsapWithCSS.to(emptyState, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: "none",
        onComplete: () => {
          emptyState.style.display = "none";
        }
      });
    }
  }
  collectTriggers() {
    if (!this.nav)
      return;
    const triggers = Array.from(this.nav.querySelectorAll("[data-filter-trigger]"));
    triggers.forEach((trigger) => {
      var _a, _b;
      const slug = normalizeSlug(
        (_b = (_a = trigger.dataset.filterTrigger) != null ? _a : trigger.getAttribute("href")) != null ? _b : ""
      );
      if (!slug)
        return;
      this.triggerMap.set(slug, trigger);
      const handler = (event) => {
        event.preventDefault();
        this.applyFilter(slug, { animate: true, updateUrl: true, pushState: true });
      };
      trigger.addEventListener("click", handler);
      this.triggerHandlers.set(trigger, handler);
    });
    if (!this.triggerMap.has("all")) {
      const allTrigger = triggers.find((trigger) => {
        var _a;
        const slug = normalizeSlug((_a = trigger.dataset.filterTrigger) != null ? _a : "");
        return slug === "all";
      });
      if (allTrigger) {
        this.triggerMap.set("all", allTrigger);
      }
    }
  }
  collectCards() {
    const elements = Array.from(
      this.container.querySelectorAll(PROJECT_CARD_SELECTOR)
    );
    const nextMap = /* @__PURE__ */ new Map();
    elements.forEach((element) => {
      const existing = this.cards.get(element);
      const categories = this.extractCategories(element);
      if (existing) {
        existing.categories = categories;
        this.measureCard(existing, true);
        nextMap.set(element, existing);
        return;
      }
      const card = {
        element,
        categories,
        defaultDisplay: getDefaultDisplay(element),
        isVisible: true
      };
      this.measureCard(card, true);
      nextMap.set(element, card);
    });
    this.cards.forEach((card, element) => {
      var _a;
      if (!nextMap.has(element)) {
        (_a = card.timeline) == null ? void 0 : _a.kill();
      }
    });
    this.cards = nextMap;
  }
  extractCategories(element) {
    const categories = /* @__PURE__ */ new Set();
    const addTokens = (value) => {
      if (!value)
        return;
      value.split(/[,/|]+/).map((token) => normalizeSlug(token)).filter(Boolean).forEach((slug) => categories.add(slug));
    };
    const attributeSources = [
      "data-filter-slug",
      "data-filter-category",
      "data-category",
      "data-categories",
      "data-capability",
      "data-filter-value",
      "data-category-slugs"
    ];
    attributeSources.forEach((attr) => {
      addTokens(element.getAttribute(attr));
    });
    const datasetSources = [
      "filterSlug",
      "filterCategory",
      "category",
      "categories",
      "capability",
      "filterValue"
    ];
    datasetSources.forEach((key) => {
      if (key in element.dataset) {
        addTokens(element.dataset[key]);
      }
    });
    const textElements = Array.from(
      element.querySelectorAll(SERVICE_TEXT_SELECTOR)
    ).filter((node) => node.childElementCount === 0);
    textElements.forEach((node) => {
      addTokens(node.textContent);
    });
    return categories;
  }
  observeMutations() {
    const target = this.container.querySelector(".project-list");
    const observerTarget = target != null ? target : this.container;
    this.observer = new MutationObserver((mutations) => {
      if (!mutations.some((mutation) => mutation.type === "childList")) {
        return;
      }
      this.scheduleRefresh();
    });
    this.observer.observe(observerTarget, {
      childList: true,
      subtree: true
    });
  }
  scheduleRefresh() {
    if (this.refreshTimeout !== null) {
      window.clearTimeout(this.refreshTimeout);
    }
    this.refreshTimeout = window.setTimeout(() => {
      this.refreshTimeout = null;
      this.collectCards();
      this.applyFilter(this.activeFilter, {
        animate: false,
        updateUrl: false,
        force: true
      });
    }, 50);
  }
  getFilterFromUrl() {
    var _a, _b;
    const url = new URL(window.location.href);
    const queryFilter = normalizeSlug(
      (_b = (_a = url.searchParams.get("category")) != null ? _a : url.searchParams.get("capability")) != null ? _b : ""
    );
    if (queryFilter)
      return queryFilter;
    const hash = url.hash.replace("#", "");
    if (!hash)
      return "all";
    if (hash.includes("=")) {
      const [key, value] = hash.split("=");
      if (key === "category" || key === "capability") {
        return normalizeSlug(value);
      }
    }
    return normalizeSlug(hash) || "all";
  }
  applyFilter(slug, options = {}) {
    const { animate = true, updateUrl = false, pushState = false, force = false } = options;
    let target = normalizeSlug(slug);
    if (!target) {
      target = "all";
    }
    if (target !== "all" && !this.triggerMap.has(target)) {
      target = "all";
    }
    if (!force && target === this.activeFilter) {
      if (updateUrl) {
        this.updateUrl(target, pushState);
      }
      return;
    }
    this.activeFilter = target;
    this.updateTriggers(target);
    this.filterCards(target, animate);
    this.maybeRevealList(!this.hasRevealedList);
    this.initialFilterApplied = true;
    updateProjectLcpPriority(this.container);
    if (updateUrl) {
      this.updateUrl(target, pushState);
    }
  }
  updateTriggers(activeSlug) {
    this.triggerMap.forEach((trigger, slug) => {
      const isActive = slug === activeSlug || activeSlug === "all" && slug === "all";
      trigger.classList.toggle("is-active", isActive);
      trigger.classList.toggle("w--current", isActive);
      if (isActive) {
        trigger.setAttribute("aria-current", "true");
        trigger.setAttribute("aria-pressed", "true");
      } else {
        trigger.removeAttribute("aria-current");
        trigger.setAttribute("aria-pressed", "false");
      }
    });
  }
  filterCards(slug, animate) {
    const showAll = slug === "all";
    const cards = Array.from(this.cards.values());
    let visibleIndex = 0;
    let visibleCount = 0;
    cards.forEach((card) => {
      const shouldShow = showAll || card.categories.has(slug);
      if (shouldShow) {
        this.showCard(card, animate, visibleIndex);
        visibleIndex += 1;
        visibleCount += 1;
      } else {
        this.hideCard(card, animate);
      }
    });
    this.toggleEmptyState(visibleCount === 0);
  }
  showCard(card, animate, index) {
    var _a;
    (_a = card.timeline) == null ? void 0 : _a.kill();
    card.timeline = void 0;
    const mediaItems = this.getCardMediaElements(card);
    const description = this.getCardDescription(card);
    this.restoreCardVisibility(card, description, mediaItems);
    if (card.isVisible) {
      gsapWithCSS.set(card.element, {
        display: card.defaultDisplay,
        autoAlpha: 1,
        y: 0,
        pointerEvents: "auto",
        overflow: "",
        height: "",
        marginTop: "",
        marginBottom: "",
        paddingTop: "",
        paddingBottom: ""
      });
      if (description) {
        gsapWithCSS.set(description, {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto"
        });
      }
      if (mediaItems.length) {
        gsapWithCSS.set(mediaItems, {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto"
        });
      }
      this.restoreCardVisibility(card, description, mediaItems);
      return;
    }
    const metrics = this.measureCard(card, true);
    const delay = Math.min(index * FILTER_DURATIONS.delayStep, FILTER_DURATIONS.maxDelay);
    const yOffset = CARD_ANIMATION_DISTANCE;
    card.isVisible = true;
    if (animate) {
      const timeline = gsapWithCSS.timeline({
        defaults: { overwrite: "auto" },
        onComplete: () => {
          if (card.timeline === timeline) {
            card.timeline = void 0;
          }
          gsapWithCSS.set(card.element, {
            overflow: "",
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: "",
            pointerEvents: "auto",
            visibility: "visible"
          });
          if (description) {
            gsapWithCSS.set(description, { pointerEvents: "auto" });
          }
          if (mediaItems.length) {
            gsapWithCSS.set(mediaItems, { pointerEvents: "auto" });
          }
          this.restoreCardVisibility(card, description, mediaItems);
          this.measureCard(card, true);
        }
      });
      timeline.set(card.element, {
        display: card.defaultDisplay,
        autoAlpha: 0,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        y: yOffset,
        overflow: "hidden",
        pointerEvents: "none",
        visibility: "hidden"
      });
      if (description) {
        timeline.set(
          description,
          {
            autoAlpha: 0,
            y: yOffset * 0.65,
            pointerEvents: "none",
            visibility: "hidden"
          },
          0
        );
      }
      if (mediaItems.length) {
        timeline.set(
          mediaItems,
          {
            autoAlpha: 0,
            pointerEvents: "none",
            visibility: "hidden"
          },
          0
        );
      }
      timeline.to(
        card.element,
        {
          height: metrics.height,
          marginTop: metrics.marginTop,
          marginBottom: metrics.marginBottom,
          paddingTop: metrics.paddingTop,
          paddingBottom: metrics.paddingBottom,
          duration: FILTER_DURATIONS.expand,
          ease: "power2.inOut",
          delay
        },
        0
      );
      timeline.to(
        card.element,
        {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto",
          visibility: "visible",
          duration: FILTER_DURATIONS.fadeIn,
          ease: "power2.out"
        },
        delay + 0.12
      );
      if (description) {
        timeline.to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            pointerEvents: "auto",
            visibility: "visible",
            duration: 0.55,
            ease: "power2.out"
          },
          delay + 0.18
        );
      }
      if (mediaItems.length) {
        timeline.to(
          mediaItems,
          {
            autoAlpha: 1,
            pointerEvents: "auto",
            visibility: "visible",
            duration: 0.6,
            stagger: 0.04,
            ease: "power2.out"
          },
          delay + 0.24
        );
      }
      card.timeline = timeline;
    } else {
      gsapWithCSS.set(card.element, {
        display: card.defaultDisplay,
        autoAlpha: 1,
        y: 0,
        pointerEvents: "auto",
        overflow: "",
        height: "",
        marginTop: "",
        marginBottom: "",
        paddingTop: "",
        paddingBottom: "",
        visibility: "visible"
      });
      if (description) {
        gsapWithCSS.set(description, {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto",
          visibility: "visible"
        });
      }
      if (mediaItems.length) {
        gsapWithCSS.set(mediaItems, {
          autoAlpha: 1,
          pointerEvents: "auto",
          visibility: "visible"
        });
      }
      this.restoreCardVisibility(card, description, mediaItems);
      this.measureCard(card, true);
    }
  }
  hideCard(card, animate) {
    var _a;
    if (!card.isVisible && !card.timeline) {
      return;
    }
    (_a = card.timeline) == null ? void 0 : _a.kill();
    card.timeline = void 0;
    this.measureCard(card, true);
    card.isVisible = false;
    const description = this.getCardDescription(card);
    const mediaItems = this.getCardMediaElements(card);
    const yOffset = CARD_ANIMATION_DISTANCE;
    if (animate) {
      const timeline = gsapWithCSS.timeline({
        defaults: { overwrite: "auto" },
        onComplete: () => {
          if (card.timeline === timeline) {
            card.timeline = void 0;
          }
          gsapWithCSS.set(card.element, {
            display: "none",
            pointerEvents: "none",
            autoAlpha: 0,
            y: 0,
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: "",
            overflow: "",
            visibility: "hidden"
          });
          if (description) {
            gsapWithCSS.set(description, {
              autoAlpha: 0,
              y: 0,
              pointerEvents: "none",
              visibility: "hidden"
            });
          }
          if (mediaItems.length) {
            gsapWithCSS.set(mediaItems, {
              autoAlpha: 0,
              pointerEvents: "none",
              visibility: "hidden"
            });
          }
        }
      });
      timeline.set(card.element, {
        overflow: "hidden",
        pointerEvents: "none",
        visibility: "visible"
      });
      if (mediaItems.length) {
        const reversed = mediaItems.slice().reverse();
        timeline.to(
          reversed,
          {
            autoAlpha: 0,
            duration: Math.max(0.45, FILTER_DURATIONS.fadeOut * 0.75),
            ease: "power2.inOut",
            stagger: 0.04
          },
          0
        );
      }
      if (description) {
        timeline.to(
          description,
          {
            autoAlpha: 0,
            y: -yOffset * 0.6,
            duration: Math.max(0.4, FILTER_DURATIONS.fadeOut * 0.7),
            ease: "power2.inOut"
          },
          0.06
        );
      }
      timeline.to(
        card.element,
        {
          autoAlpha: 0,
          y: -yOffset,
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: FILTER_DURATIONS.collapse,
          ease: "power2.inOut"
        },
        0
      );
      card.timeline = timeline;
    } else {
      gsapWithCSS.set(card.element, {
        autoAlpha: 0,
        y: 0,
        display: "none",
        pointerEvents: "none",
        height: "",
        marginTop: "",
        marginBottom: "",
        paddingTop: "",
        paddingBottom: "",
        overflow: "",
        visibility: "hidden"
      });
      if (description) {
        gsapWithCSS.set(description, {
          autoAlpha: 0,
          y: 0,
          pointerEvents: "none",
          visibility: "hidden"
        });
      }
      if (mediaItems.length) {
        gsapWithCSS.set(mediaItems, {
          autoAlpha: 0,
          y: 0,
          pointerEvents: "none",
          visibility: "hidden"
        });
      }
    }
  }
  updateUrl(slug, pushState) {
    const url = new URL(window.location.href);
    if (slug === "all") {
      url.searchParams.delete("category");
      url.searchParams.delete("capability");
    } else {
      url.searchParams.set("category", slug);
    }
    const newUrl = `${url.pathname}${url.search}${url.hash}`;
    if (pushState) {
      window.history.pushState({ filter: slug }, "", newUrl);
    } else {
      window.history.replaceState({ filter: slug }, "", newUrl);
    }
  }
};
var controller = null;
function initProjectFilters(scope = document, options) {
  destroyProjectFilters();
  controller = new ProjectFilterController(scope, options);
  controller.init();
}
function destroyProjectFilters() {
  controller == null ? void 0 : controller.destroy();
  controller = null;
}
function applyProjectFilter(slug, options) {
  controller == null ? void 0 : controller.applyExternalFilter(slug, options);
}
export {
  applyProjectFilter,
  destroyProjectFilters,
  initProjectFilters
};
//# sourceMappingURL=projectFilter-KTNCZOON.js.map
