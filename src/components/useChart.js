import { useEffect, useState } from "react";

const useChart = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((response) => response.json())
      .then((data) => setChart(data));
  }, []);
  return [chart.data];
};
export default useChart;
