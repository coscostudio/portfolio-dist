import {
  gsapWithCSS,
  init_live_reload
} from "./chunk-2ZU6O5O6.js";

// src/utils/pageAnimations.ts
init_live_reload();
var ENTER_DURATION = 0.75;
var LEAVE_DURATION = 0.75;
var MOTION_DISTANCE = 20;
var TRANSITION_EASE = "power2.out";
var projectNamespaces = /* @__PURE__ */ new Set(["projects", "digital", "graphic", "direction", "imaging"]);
var namespaceAnimations = {
  info: [
    {
      selectors: [".headline"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [
        ".slider",
        ".slider-wrapper",
        ".slider_wrapper",
        ".hero-slider-wrapper",
        ".panorama-slider"
      ],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".section_about", ".footer"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".info-reveal-word"],
      enter: "up",
      leave: "down"
    }
  ],
  projects: [
    {
      selectors: [".component_project-header"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [".top-nav"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [".projects-nav"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [".projects-wrapper", ".projects_wrapper"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".footer"],
      enter: "up",
      leave: "down"
    }
  ],
  cases: [
    {
      selectors: [".top-nav"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [".section_case-header", ".component_case-header"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".section_case-media"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".section_case-description", ".section_cases-nav", ".footer"],
      enter: "up",
      leave: "down"
    }
  ],
  archive: [
    {
      selectors: [".top-nav", ".top-nav-text"],
      enter: "down",
      leave: "up"
    },
    {
      selectors: [".loading-ui", ".loading-ui-wrapper"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".archive-container"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".archive-sphere", ".archive-sphere__renderer", "[data-archive-sphere]"],
      enter: "up",
      leave: "down"
    },
    {
      selectors: [".footer"],
      enter: "up",
      leave: "down"
    }
  ]
};
function getNamespaceKey(namespace) {
  if (!namespace)
    return "info";
  if (projectNamespaces.has(namespace))
    return "projects";
  return namespaceAnimations[namespace] ? namespace : "info";
}
function collectElements(scope, selectors) {
  const unique = /* @__PURE__ */ new Set();
  selectors.forEach((selector) => {
    if (!selector)
      return;
    const nodes = scope.querySelectorAll(selector);
    nodes.forEach((node) => {
      if (!unique.has(node)) {
        unique.add(node);
      }
    });
  });
  return Array.from(unique);
}
function setInitialStates(scope, steps, distance) {
  steps.forEach((step) => {
    const elements = collectElements(scope, step.selectors);
    if (!elements.length)
      return;
    if (!step.enter) {
      gsapWithCSS.set(elements, { opacity: 1, y: 0, visibility: "visible" });
      return;
    }
    const offset = step.enter === "down" ? -distance : distance;
    gsapWithCSS.set(elements, {
      opacity: 0,
      y: offset,
      visibility: "visible",
      willChange: "transform, opacity"
    });
  });
}
function runPhase(phase, scope, steps, distance) {
  const timeline = gsapWithCSS.timeline({
    defaults: {
      ease: TRANSITION_EASE
    }
  });
  steps.forEach((step) => {
    const direction = step[phase];
    if (!direction)
      return;
    const elements = collectElements(scope, step.selectors);
    if (!elements.length)
      return;
    const isEnter = phase === "enter";
    const offsetValue = direction === "down" ? distance : -distance;
    const tweenVars = isEnter ? { opacity: 1, y: 0, duration: ENTER_DURATION } : { opacity: 0, y: offsetValue, duration: LEAVE_DURATION };
    gsapWithCSS.set(elements, { visibility: "visible", willChange: "transform, opacity" });
    timeline.to(elements, tweenVars, 0);
    if (isEnter) {
      timeline.set(
        elements,
        {
          clearProps: "willChange,visibility"
        },
        timeline.duration() - 1e-3
      );
    } else {
      timeline.set(
        elements,
        { visibility: "hidden", clearProps: "willChange" },
        timeline.duration() - 1e-3
      );
    }
  });
  if (!timeline.getChildren().length) {
    timeline.kill();
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    timeline.eventCallback("onComplete", () => {
      timeline.getChildren().forEach((child) => child.kill());
      resolve();
    });
  });
}
function prepareNamespaceEnter(namespace, scope) {
  var _a;
  const key = getNamespaceKey(namespace);
  const steps = (_a = namespaceAnimations[key]) != null ? _a : [];
  setInitialStates(scope, steps, MOTION_DISTANCE);
}
function animateNamespaceEnter(namespace, scope) {
  var _a;
  const key = getNamespaceKey(namespace);
  const steps = (_a = namespaceAnimations[key]) != null ? _a : [];
  return runPhase("enter", scope, steps, MOTION_DISTANCE);
}
function animateNamespaceLeave(namespace, scope) {
  var _a;
  const key = getNamespaceKey(namespace);
  const steps = (_a = namespaceAnimations[key]) != null ? _a : [];
  return runPhase("leave", scope, steps, MOTION_DISTANCE);
}
var pageAnimationTiming = {
  enter: ENTER_DURATION,
  leave: LEAVE_DURATION,
  distance: MOTION_DISTANCE,
  ease: TRANSITION_EASE
};

// src/utils/lcpPriorityManager.ts
init_live_reload();

// src/components/cases/conditionalMediaPruner.ts
init_live_reload();
var CONDITIONAL_VISIBILITY_CLASSES = ["w-condition-invisible", "-w-condition-invisible"];
var ATTRIBUTE_FILTER = ["class", "style", "hidden"];
var MEDIA_SELECTOR = "video[data-src-1080], video[data-src-720], video[data-hls], video.slide-video, img, picture";
var pendingRevealMap = /* @__PURE__ */ new Map();
function pruneConditionalMedia(scope) {
  const selector = CONDITIONAL_VISIBILITY_CLASSES.map((className) => `.${className}`).join(", ");
  if (!selector)
    return;
  const root = scope instanceof Document ? scope : scope;
  const hiddenElements = root.querySelectorAll(selector);
  hiddenElements.forEach((element) => {
    if (element.dataset.hlsPreserve === "true" || element.dataset.mediaPreserve === "true") {
      return;
    }
    disconnectObserversInTree(element);
    element.remove();
  });
}
function shouldDeferConditionalMedia(element) {
  if (!element.isConnected) {
    return true;
  }
  return Boolean(findHiddenAncestor(element));
}
function waitForConditionalReveal(element, callback) {
  if (!shouldDeferConditionalMedia(element)) {
    callback();
    return;
  }
  const existing = pendingRevealMap.get(element);
  if (existing) {
    existing.callbacks.add(callback);
    return;
  }
  const observer = new MutationObserver(() => {
    if (!element.isConnected) {
      finalizeReveal(element);
      return;
    }
    if (!shouldDeferConditionalMedia(element)) {
      finalizeReveal(element);
    }
  });
  observeAncestors(element, observer);
  const entry = {
    observer,
    callbacks: /* @__PURE__ */ new Set([callback])
  };
  pendingRevealMap.set(element, entry);
  scheduleRevealCheck(element);
}
function cleanupConditionalObservers(scope) {
  if (!pendingRevealMap.size) {
    return;
  }
  if (!scope) {
    pendingRevealMap.forEach((entry, element) => {
      entry.observer.disconnect();
      pendingRevealMap.delete(element);
    });
    return;
  }
  const root = scope instanceof Document ? scope : scope;
  pendingRevealMap.forEach((entry, element) => {
    if (!element.isConnected || root.contains(element)) {
      entry.observer.disconnect();
      pendingRevealMap.delete(element);
    }
  });
}
function findHiddenAncestor(element) {
  var _a, _b;
  let current = element;
  while (current) {
    if (matchesConditionalClass(current)) {
      return current;
    }
    if (current.hasAttribute("hidden")) {
      return current;
    }
    const inlineDisplay = (_a = current.style) == null ? void 0 : _a.display;
    if (inlineDisplay && inlineDisplay.toLowerCase() === "none") {
      return current;
    }
    const inlineVisibility = (_b = current.style) == null ? void 0 : _b.visibility;
    if (inlineVisibility && inlineVisibility.toLowerCase() === "hidden") {
      return current;
    }
    const computed = window.getComputedStyle(current);
    if (computed.display === "none" || computed.visibility === "hidden") {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function matchesConditionalClass(element) {
  return CONDITIONAL_VISIBILITY_CLASSES.some((className) => element.classList.contains(className));
}
function scheduleRevealCheck(element) {
  const runCheck = () => {
    if (!pendingRevealMap.has(element)) {
      return;
    }
    if (!element.isConnected) {
      finalizeReveal(element);
      return;
    }
    if (!shouldDeferConditionalMedia(element)) {
      finalizeReveal(element);
    }
  };
  if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(runCheck);
  } else {
    window.setTimeout(runCheck, 32);
  }
}
function finalizeReveal(element) {
  const entry = pendingRevealMap.get(element);
  if (!entry)
    return;
  entry.observer.disconnect();
  pendingRevealMap.delete(element);
  entry.callbacks.forEach((callback) => {
    try {
      callback();
    } catch {
    }
  });
}
function observeAncestors(element, observer) {
  let current = element;
  while (current) {
    observer.observe(current, {
      attributes: true,
      attributeFilter: ATTRIBUTE_FILTER
    });
    current = current.parentElement;
  }
}
function disconnectObserversInTree(root) {
  disconnectObserverForElement(root);
  const descendants = root.querySelectorAll(MEDIA_SELECTOR);
  descendants.forEach((descendant) => disconnectObserverForElement(descendant));
}
function disconnectObserverForElement(element) {
  const observerEntry = pendingRevealMap.get(element);
  if (!observerEntry) {
    return;
  }
  observerEntry.observer.disconnect();
  pendingRevealMap.delete(element);
}

// src/utils/lcpPriorityManager.ts
var PROJECT_CARD_SELECTOR = ".project-div";
var PROJECT_IMAGE_SELECTOR = ".project-image";
var CASE_CONTAINER_SELECTOR = ".case-media";
var LAZY_ATTRIBUTE_NAMES = [
  "loading",
  "data-loading",
  "data-wf-loading",
  "data-wf-lazy",
  "data-lazy"
];
var prioritizedAttributeStore = /* @__PURE__ */ new WeakMap();
var pendingProjectRenders = /* @__PURE__ */ new WeakMap();
var pendingCaseRenders = /* @__PURE__ */ new WeakMap();
function getScopeRoot(scope) {
  return scope instanceof Document ? scope : scope;
}
function scheduleWithAnimationFrame(target, registry, callback) {
  if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") {
    callback();
    return;
  }
  const existing = registry.get(target);
  if (typeof existing === "number") {
    window.cancelAnimationFrame(existing);
  }
  const rafId = window.requestAnimationFrame(() => {
    registry.delete(target);
    callback();
  });
  registry.set(target, rafId);
}
function ensureAttributeStore(image) {
  let store = prioritizedAttributeStore.get(image);
  if (!store) {
    store = /* @__PURE__ */ new Map();
    prioritizedAttributeStore.set(image, store);
  }
  return store;
}
function rememberAndRemoveAttribute(image, attr) {
  const value = image.getAttribute(attr);
  const store = ensureAttributeStore(image);
  if (value !== null) {
    store.set(attr, value);
    image.removeAttribute(attr);
  } else if (!store.has(attr)) {
    store.set(attr, null);
  }
}
function restoreAttribute(image, attr) {
  const store = prioritizedAttributeStore.get(image);
  const storedValue = store == null ? void 0 : store.get(attr);
  if (storedValue === void 0) {
    if (attr === "loading" && (!image.hasAttribute("loading") || image.getAttribute("loading") === "eager")) {
      image.setAttribute("loading", "lazy");
    }
    return;
  }
  if (storedValue === null) {
    image.removeAttribute(attr);
  } else {
    image.setAttribute(attr, storedValue);
  }
  store == null ? void 0 : store.delete(attr);
  if (store && store.size === 0) {
    prioritizedAttributeStore.delete(image);
  }
}
function applyPriority(image) {
  if (!(image instanceof HTMLImageElement)) {
    return null;
  }
  if (image.dataset.lcpPriority === "true") {
    image.setAttribute("loading", "eager");
    image.setAttribute("fetchpriority", "high");
    return image;
  }
  LAZY_ATTRIBUTE_NAMES.forEach((attr) => rememberAndRemoveAttribute(image, attr));
  image.setAttribute("loading", "eager");
  image.setAttribute("fetchpriority", "high");
  image.dataset.lcpPriority = "true";
  return image;
}
function removePriority(image) {
  if (image.dataset.lcpPriority !== "true") {
    return;
  }
  image.removeAttribute("fetchpriority");
  LAZY_ATTRIBUTE_NAMES.forEach((attr) => restoreAttribute(image, attr));
  delete image.dataset.lcpPriority;
}
function resolveImageCandidate(element) {
  if (!element) {
    return null;
  }
  if (element instanceof HTMLImageElement) {
    return element;
  }
  if (element instanceof HTMLPictureElement) {
    const nested = element.querySelector("img");
    return nested instanceof HTMLImageElement ? nested : null;
  }
  const descendant = element.querySelector("img");
  return descendant instanceof HTMLImageElement ? descendant : null;
}
function collectProjectImages(card) {
  const directMatches = Array.from(card.querySelectorAll(PROJECT_IMAGE_SELECTOR));
  const resolved = directMatches.map((candidate) => resolveImageCandidate(candidate)).filter((candidate) => Boolean(candidate));
  if (resolved.length) {
    return Array.from(new Set(resolved));
  }
  const fallback = resolveImageCandidate(card.querySelector("img"));
  return fallback ? [fallback] : [];
}
function demoteUntrackedImages(root, keep) {
  const scopeRoot = getScopeRoot(root);
  const previouslyPrioritized = scopeRoot.querySelectorAll('img[data-lcp-priority="true"]');
  previouslyPrioritized.forEach((image) => {
    if (!keep.has(image)) {
      removePriority(image);
    }
  });
}
function isElementVisiblyActive(element) {
  if (!element.isConnected) {
    return false;
  }
  const style = window.getComputedStyle(element);
  if (style.display === "none" || style.visibility === "hidden") {
    return false;
  }
  if (element.offsetWidth === 0 && element.offsetHeight === 0) {
    return false;
  }
  return true;
}
function findFirstVisibleProjectCard(scope) {
  const root = getScopeRoot(scope);
  const cards = Array.from(root.querySelectorAll(PROJECT_CARD_SELECTOR));
  for (const card of cards) {
    if (isElementVisiblyActive(card)) {
      return card;
    }
  }
  return null;
}
function updateProjectScope(root) {
  const card = findFirstVisibleProjectCard(root);
  const prioritized = /* @__PURE__ */ new Set();
  if (card) {
    const images = collectProjectImages(card);
    images.forEach((image) => {
      const prioritizedImage = applyPriority(image);
      if (prioritizedImage) {
        prioritized.add(prioritizedImage);
      }
    });
  }
  demoteUntrackedImages(root, prioritized);
}
function findCaseHero(scope) {
  const root = getScopeRoot(scope);
  const section = root instanceof Element ? root.querySelector(".section_case-media") : null;
  const scopedRoot = section != null ? section : root;
  const wrappers = Array.from(
    scopedRoot.querySelectorAll(
      ".case-list-wrapper .case-list .case-media-wrapper, .case-media-wrapper"
    )
  );
  for (const wrapper of wrappers) {
    const media = wrapper.querySelector(".case-media");
    const mediaImage = resolveImageCandidate(media);
    if (mediaImage) {
      return mediaImage;
    }
    const fallback = resolveImageCandidate(wrapper);
    if (fallback) {
      return fallback;
    }
  }
  const directMedia = scopedRoot.querySelector(CASE_CONTAINER_SELECTOR);
  if (directMedia) {
    const directImage = resolveImageCandidate(directMedia);
    if (directImage) {
      return directImage;
    }
  }
  const fallbackImage = scopedRoot.querySelector("img");
  if (fallbackImage instanceof HTMLImageElement) {
    return fallbackImage;
  }
  return null;
}
function updateCaseScope(root) {
  const hero = findCaseHero(root);
  const prioritized = /* @__PURE__ */ new Set();
  if (!hero) {
    demoteUntrackedImages(root, prioritized);
    return;
  }
  const applyHeroPriority = () => {
    const prioritizedHero = applyPriority(hero);
    if (prioritizedHero) {
      prioritized.add(prioritizedHero);
    }
    demoteUntrackedImages(root, prioritized);
  };
  if (shouldDeferConditionalMedia(hero)) {
    waitForConditionalReveal(hero, applyHeroPriority);
  } else {
    applyHeroPriority();
  }
}
function updateProjectLcpPriority(scope) {
  const root = getScopeRoot(scope);
  scheduleWithAnimationFrame(root, pendingProjectRenders, () => updateProjectScope(root));
}
function scheduleCaseLcpPriority(scope) {
  const root = getScopeRoot(scope);
  scheduleWithAnimationFrame(root, pendingCaseRenders, () => updateCaseScope(root));
}

export {
  pruneConditionalMedia,
  shouldDeferConditionalMedia,
  waitForConditionalReveal,
  cleanupConditionalObservers,
  projectNamespaces,
  prepareNamespaceEnter,
  animateNamespaceEnter,
  animateNamespaceLeave,
  pageAnimationTiming,
  updateProjectLcpPriority,
  scheduleCaseLcpPriority
};
//# sourceMappingURL=chunk-HVZSCGIQ.js.map
