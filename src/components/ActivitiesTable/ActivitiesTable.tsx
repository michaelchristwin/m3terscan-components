import useSWR from "swr";
import { api } from "../../api";
import { formatDistanceToNow } from "date-fns";
import styles from "./ActivitiesTable.module.css";

const tableHeaders = ["Time", "Energy", "Signature", "Value", "Status"];

type ActivitiesTableProps = {
  meterId?: number;
  headerColor?: string;
  colors?: {
    even: string;
    odd: string;
  };
};

export function ActivitiesTable({
  meterId,
  headerColor,
  colors,
}: ActivitiesTableProps) {
  const { data, error, isLoading } = useSWR(
    meterId ? ["activities"] : null,
    async () =>
      (await api.getActivitiesM3TerM3TerIdActivitiesGet(meterId!)).data,
    {
      refreshInterval: 15 * 60 * 1000,
    }
  );

  if (isLoading) {
    return (
      <div className={styles.isloading}>
        <div className={styles.inner}>
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
            className={styles.lucide_loader_circle}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          <p className={styles.loading_text}>Loading activities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Data loading failed</p>
      </div>
    );
  }

  if (data) {
    return (
      <table className={styles.table}>
        <thead
          className={styles.table_head}
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
              <td className={styles.time}>
                {formatDistanceToNow(new Date(d.timestamp))} ago
              </td>
              <td className={styles.energy}>{d.energy.toFixed(2)} kWh</td>
              <td className={styles.signature}>{d.signature}</td>
              <td className={styles.value}>
                {(d.energy * 0.6).toFixed(3)} USD
              </td>
              <td className={styles.status}>Valid</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
