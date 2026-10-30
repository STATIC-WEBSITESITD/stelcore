import { Minus, Plus } from "lucide-react";
import {
  formatDate,
  formatDeliveryDate,
  formatEventTime,
  getDocketLabel,
  type Docket,
} from "@/utils/tracking";

export default function TrackingAccordionItem({
  docket,
  searchSelected,
  isActive,
  onToggle,
}: {
  docket: Docket;
  searchSelected: string;
  isActive: boolean;
  onToggle: () => void;
}) {
  const lblNo = getDocketLabel(docket, searchSelected);
  const info = docket.docket_info;
  const hasInfo = Boolean(info && info.length);
  const hasEvents = Boolean(docket.docket_events && docket.docket_events.length);

  if (!hasInfo && !hasEvents) {
    return (
      <div className="tracking-data-accordion-item">
        <div className="invalid-record">
          <h5>Invalid No.: {docket.tracking_no}</h5>
        </div>
      </div>
    );
  }

  if (!info || !hasInfo) return null;

  const bookingDate = formatDate(new Date(info[1][1]));
  const deliveryDate = formatDeliveryDate(info[5][1]);
  const deliveryTime = info[5][1] ? info[5][1].split(" ")[1] : "";

  return (
    <div className="tracking-data-accordion-item">
      <div
        className={`accordion-header ${isActive ? "active" : ""}`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
      >
        <h2>{lblNo}</h2>
        <h2>Status: {info[4][1]}</h2>
        <span className="accordion-toggle">
          {isActive ? (
            <Minus className="fa_icon h-4 w-4" aria-hidden />
          ) : (
            <Plus className="fa_icon h-4 w-4" aria-hidden />
          )}
        </span>
      </div>
      <div className={`accordion-body ${isActive ? "active" : ""}`}>
        <h3 className="text-center">{lblNo}</h3>
        <div className="tracking-info mt-4">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <td colSpan={11}>
                    <b>Tracking Information</b>
                  </td>
                </tr>
                <tr>
                  <th>AWB No.</th>
                  <th>Booking Date</th>
                  <th>Consignee Name</th>
                  <th>Destination</th>
                  <th>No. of Pieces</th>
                  <th>Status</th>
                  <th>Delivery Date</th>
                  <th>Delivery Time</th>
                  <th>Receiver Name</th>
                  <th>Forwarding No.</th>
                  <th>View POD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{info[0][1]}</td>
                  <td>{bookingDate}</td>
                  <td>{info[2][1]}</td>
                  <td>{info[3][1]}</td>
                  <td>{docket.pcs ?? ""}</td>
                  <td>{info[4][1]}</td>
                  <td>{deliveryDate}</td>
                  <td>{deliveryTime}</td>
                  <td>{info[6][1]}</td>
                  <td>
                    {docket.forwarding_url ? (
                      <a
                        href={docket.forwarding_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "black", fontWeight: 600 }}
                      >
                        <u> {docket.forwarding_no}</u>
                      </a>
                    ) : (
                      (docket.forwarding_no ?? "")
                    )}
                  </td>
                  <td>
                    {docket.pod_image ? (
                      <a href={docket.pod_image} target="_blank" rel="noreferrer">
                        View
                      </a>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {hasEvents ? (
          <div className="delivery-info mt-4">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <td colSpan={5}>
                      <b>Delivery Information</b>
                    </td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Activity</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {docket.docket_events!.map((event, idx) => (
                    <tr key={idx}>
                      <td>
                        {event.event_at
                          ? formatDate(new Date(event.event_at))
                          : " "}
                      </td>
                      <td>{formatEventTime(event.event_at)}</td>
                      <td>{event.event_location}</td>
                      <td>{event.event_description}</td>
                      <td>{event.event_remark ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
