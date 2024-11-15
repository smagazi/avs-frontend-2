import { Card } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface BettingCardProps {
  title: string;
  description: string;
  link: string;
  yesData: number[];
  noData: number[];
}

const BettingCard: React.FC<BettingCardProps> = ({ title, description, link, yesData, noData }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Yes",
        data: yesData,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "No",
        data: noData,
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  return (
    <Card className="cursor-pointer relative p-4 h-72" onClick={handleClick}>
      <CardTitle className="text-white pl-2">{title}</CardTitle>
      <div className="h-48">
        <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
      <Button className="absolute bottom-4 left-4" onClick={handleClick}>View Details</Button>
    </Card>
  );
};

export default BettingCard; 