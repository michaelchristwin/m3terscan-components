import ChartJS from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./DailyBarChart.css";
import { DailyResponse } from "../../apiClient/data-contracts";

ChartJS.register();
type DailyBarChartProps = {
  data?: DailyResponse[];
  isLoading?: boolean;
  error?: boolean | Error;
  chartLow?: string;
  chartHigh?: string;
};

export function DailyBarChart({
  isLoading,
  error,
  data,
  chartLow,
  chartHigh,
}: DailyBarChartProps) {
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
          <p className="loading_text">Loading charts...</p>
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
    const maxEnergy = Math.max(...data.map((d) => d.total_energy));
    const colors = data.map((entry) => {
      if (entry.total_energy >= maxEnergy && maxEnergy > 0) {
        return chartHigh || "#28B750"; // Green for Peak
      }
      return chartLow || "#EB822A"; // Orange for sub-peak
    });

    const barChartData = {
      labels: data.map((d) =>
        new Date(d.hour_start_utc).toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      ),
      datasets: [
        {
          label: "Energy used",
          data: data.map((d) => d.total_energy),
          backgroundColor: colors,
          borderRadius: 4,
        },
      ],
    };

    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { display: false },
          title: { display: true, text: "Hour" },
        },
        y: {
          grid: { drawTicks: false, display: false },
          title: { display: true, text: "Energy used" },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            label: (context: any) =>
              `Energy: ${Number(context.raw).toFixed(2)}`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            title: (items: any) => `Hour: ${items[0].label}`,
          },
        },
      },
    };

    return (
      <div className="container">
        <h3 className="title">Hourly energy usage.</h3>
        <div className="chart">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    );
  }
}
