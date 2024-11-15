import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MarketSentiment = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Market Sentiment",
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Probabilities",
        data: [10, 15, 5, 8, 3],
        fill: false,
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  return (
    <div className="p-6 text-black">
      <Card>
        <CardTitle className="text-black">Market Sentiment & Probabilities</CardTitle>
        <Line data={data} />
      </Card>
      <div className="mt-4">
        <Button className="mr-2">Buy "Yes" Shares</Button>
        <Button variant="secondary">Buy "No" Shares</Button>
      </div>
    </div>
  );
};

export default MarketSentiment; 