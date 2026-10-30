import { createBrowserRouter, Navigate } from "react-router";
import Layout from "@/components/Layout";
import About from "@/pages/About";
import Compliance from "@/pages/Compliance";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import PolicyPage from "@/pages/PolicyPage";
import TradeEnablement from "@/pages/TradeEnablement";

/** Pages temporarily hidden from clients — URLs redirect home. */
const hiddenPaths = [
  "markets",
  "industries",
  "cross-border-express",
  "ocean-freight",
  "global-fulfilment",
  "last-mile-returns",
  "supply-chain",
  "global-trade",
  "my-shipment",
] as const;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "trade-enablement", Component: TradeEnablement },
      { path: "compliance", Component: Compliance },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PolicyPage },
      { path: "terms-and-conditions", Component: PolicyPage },
      { path: "refund-policy", Component: PolicyPage },
      { path: "shipping-policy", Component: PolicyPage },
      ...hiddenPaths.map((path) => ({
        path,
        element: <Navigate to="/" replace />,
      })),
    ],
  },
]);
