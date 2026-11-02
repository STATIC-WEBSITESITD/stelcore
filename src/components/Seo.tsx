import { useEffect } from "react";
import { useLocation } from "react-router";
import { getSeoForPath } from "@/data/seo";

function upsertMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getSeoForPath(pathname);
    document.title = title;
    upsertMeta("description", description);
  }, [pathname]);

  return null;
}
