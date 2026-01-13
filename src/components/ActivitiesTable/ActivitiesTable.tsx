import { formatDistanceToNow } from "date-fns";
import "./ActivitiesTable.css";
import { ActivitiesResponse } from "../../apiClient/data-contracts";

const tableHeaders = ["Time", "Energy", "Signature", "Value", "Status"];

type ActivitiesTableProps = {
  data?: ActivitiesResponse;
  isLoading?: boolean;
  error?: boolean | Error;
  headerColor?: string;
  colors?: {
    even: string;
    odd: string;
  };
};

export function ActivitiesTable({
  headerColor,
  colors,
  isLoading,
  error,
  data,
}: ActivitiesTableProps) {
  if (isLoading) {
    return (
      <div className="isloading">
        <div className="inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide_loader_circle"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          <p className="loading_text">Loading activities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error_container">
        <p className="error_text">
          {typeof error === "object" ? error.message : "Data loading failed"}
        </p>
      </div>
    );
  }

  if (data) {
    return (
      <table className="table">
        <thead
          className="table_head"
          style={headerColor ? { color: headerColor } : undefined}
        >
          <tr>
            {tableHeaders.map((head, i) => (
              <th scope="col" key={i.toString()}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.data.map((d, i) => (
            <tr
              key={i.toString()}
              style={
                colors
                  ? ({
                      "--row-bg": i % 2 === 0 ? colors.even : colors.odd,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <td className="time">
                {formatDistanceToNow(new Date(d.timestamp))} ago
              </td>
              <td className="energy">{d.energy.toFixed(2)} kWh</td>
              <td className="signature">{d.signature}</td>
              <td className="value">{(d.energy * 0.6).toFixed(3)} USD</td>
              <td className="status">Valid</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
