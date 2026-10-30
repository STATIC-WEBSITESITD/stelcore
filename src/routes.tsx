import { createBrowserRouter } from "react-router";
import Layout from "@/components/Layout";
import About from "@/pages/About";
import Compliance from "@/pages/Compliance";
import Contact from "@/pages/Contact";
import CrossBorderExpress from "@/pages/CrossBorderExpress";
import GlobalFulfilment from "@/pages/GlobalFulfilment";
import GlobalTrade from "@/pages/GlobalTrade";
import Home from "@/pages/Home";
import Industries from "@/pages/Industries";
import LastMileReturns from "@/pages/LastMileReturns";
import Markets from "@/pages/Markets";
import MyShipment from "@/pages/MyShipment";
import OceanFreight from "@/pages/OceanFreight";
import PolicyPage from "@/pages/PolicyPage";
import SupplyChain from "@/pages/SupplyChain";
import TradeEnablement from "@/pages/TradeEnablement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "markets", Component: Markets },
      { path: "industries", Component: Industries },
      { path: "trade-enablement", Component: TradeEnablement },
      { path: "compliance", Component: Compliance },
      { path: "cross-border-express", Component: CrossBorderExpress },
      { path: "ocean-freight", Component: OceanFreight },
      { path: "global-fulfilment", Component: GlobalFulfilment },
      { path: "last-mile-returns", Component: LastMileReturns },
      { path: "supply-chain", Component: SupplyChain },
      { path: "global-trade", Component: GlobalTrade },
      { path: "contact", Component: Contact },
      { path: "my-shipment", Component: MyShipment },
      { path: "privacy-policy", Component: PolicyPage },
      { path: "terms-and-conditions", Component: PolicyPage },
      { path: "refund-policy", Component: PolicyPage },
      { path: "shipping-policy", Component: PolicyPage },
    ],
  },
]);
