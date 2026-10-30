const API_BASE =
  "https://admin.stelcore360.com/api/tracking_api/get_tracking_data";

const API_QUERY =
  "customer_code=superadmin&company=stelcore-360&api_company_id=54";

export type DocketEvent = {
  event_at?: string;
  event_location?: string;
  event_description?: string;
  event_remark?: string;
};

export type DocketInfo = [string, string][];

export type Docket = {
  tracking_no?: string;
  reference_no?: string;
  order_no?: string;
  eway_bill_no?: string;
  invoice_no?: string;
  forwarding_no?: string;
  forwarding_no2?: string;
  forwarding_url?: string;
  pod_image?: string;
  pcs?: string | number;
  docket_info?: DocketInfo;
  docket_events?: DocketEvent[];
};

export function formatDate(date: Date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return " ";
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${monthIndex + 1}/${year}`;
}

export function getSearchTypeParam(searchSelected: string | number) {
  if (searchSelected === "1" || searchSelected === 1) return "tracking_no";
  if (searchSelected === "6" || searchSelected === 6) return "forwarding_no1";
  if (searchSelected === "2" || searchSelected === 2) return "reference_no";
  return "tracking_no";
}

export function normalizeTrackingInput(raw: string) {
  if (!raw) return [];
  const trimmed = raw.trim().split(/\s+/).join(",");
  return trimmed
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);
}

export function buildTrackingApiUrl(
  searchSelected: string | number,
  trackingNo: string,
) {
  const searchtype = getSearchTypeParam(searchSelected);
  const normalized = normalizeTrackingInput(trackingNo).join(",");
  return `${API_BASE}?${searchtype}=${encodeURIComponent(normalized)}&${API_QUERY}`;
}

export function getDocketLabel(docket: Docket, searchSelected: string | number) {
  const by = String(searchSelected);
  if (by === "1") return `AWB: ${docket.tracking_no}`;
  if (by === "2") return `Reference: ${docket.reference_no}`;
  if (by === "3") return `Order: ${docket.order_no}`;
  if (by === "4") return `Eway Bill: ${docket.eway_bill_no}`;
  if (by === "5") return `Invoice: ${docket.invoice_no}`;
  if (by === "6") return `Forwarding : ${docket.forwarding_no}`;
  return `Forwarding 2: ${docket.forwarding_no2}`;
}

export function formatDeliveryDate(value: string | undefined) {
  const d = new Date(value ?? "");
  if (Number.isNaN(d.getTime()) || value === "undefined") return " ";
  return formatDate(d);
}

export function formatEventTime(eventAt: string | undefined) {
  if (!eventAt) return " ";
  const parts = eventAt.split(" ");
  return parts[1] ? parts[1].slice(0, 5) : " ";
}

export async function fetchTrackingData(
  searchSelected: string | number,
  trackingNo: string,
): Promise<Docket[]> {
  const url = buildTrackingApiUrl(searchSelected, trackingNo);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch tracking data");
  return res.json();
}
