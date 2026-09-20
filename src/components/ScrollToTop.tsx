// NOTE: This scroll to top is the default react scroll to top behavior when visiting a new route.
// For the scroll to top behavior on a click event I have created a custom hook with the name of useScrollToTop under the hooks folder that scrolls use to the top of the page when they scroll down on the page.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Home is lazy-loaded; retry briefly until the target section exists.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        attempts += 1;
        if (attempts < 20) {
          window.setTimeout(tryScroll, 50);
        } else {
          window.scrollTo(0, 0);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
