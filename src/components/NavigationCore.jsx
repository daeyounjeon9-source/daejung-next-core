import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HOME_PATH = "/";
const STACK_KEY = "dn_route_history_v1";

function readStack() {
  try {
    return JSON.parse(sessionStorage.getItem(STACK_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeStack(stack) {
  sessionStorage.setItem(STACK_KEY, JSON.stringify(stack.slice(-40)));
}

export default function NavigationCore() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastPathRef = useRef(location.pathname + location.search + location.hash);

  useEffect(() => {
    const nextPath = location.pathname + location.search + location.hash;
    const prevPath = lastPathRef.current;
    if (nextPath !== prevPath) {
      const stack = readStack();
      if (prevPath && prevPath !== nextPath) {
        stack.push(prevPath);
        writeStack(stack);
      }
      lastPathRef.current = nextPath;
    }
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (window.history.state?.dnRootGuard) return;
    window.history.replaceState({ ...(window.history.state || {}), dnRootGuard: true }, "", window.location.href);
  }, []);

  const goHome = () => {
    writeStack([]);
    window.dispatchEvent(new CustomEvent("dn:navigation-home"));
    navigate(HOME_PATH, { replace: true });
    window.setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 40);
  };

  const goBack = () => {
    const homeBackEvent = new CustomEvent("dn:navigation-back", { detail: { handled: false } });

    if (location.pathname === HOME_PATH) {
      window.dispatchEvent(homeBackEvent);
      if (homeBackEvent.detail.handled) return;
      goHome();
      return;
    }

    const stack = readStack().filter(Boolean);
    const previous = stack.pop();
    writeStack(stack);

    if (previous && previous.startsWith("/") && previous !== window.location.pathname) {
      navigate(previous, { replace: true });
      return;
    }

    navigate(HOME_PATH, { replace: true });
  };

  const goForward = () => {
    window.dispatchEvent(new CustomEvent("dn:navigation-forward"));
  };

  return (
    <nav className="dn-nav-core" aria-label="DAEJUNG NEXT 공통 이동">
      <button className="dn-nav-back" type="button" onClick={goBack} aria-label="이전">
        <span className="nav-arrow nav-tone-2">◀</span>
      </button>
      <button className="dn-nav-home" type="button" onClick={goHome} aria-label="홈">홈</button>
      <button className="dn-nav-forward" type="button" onClick={goForward} aria-label="다음">
        <span className="nav-arrow nav-tone-2">▶</span>
      </button>
    </nav>
  );
}
