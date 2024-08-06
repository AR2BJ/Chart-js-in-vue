<template>
  <div class="chart-container ma-5">
    <Chart :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important; /* Adjust width as needed */
  height: 300px !important; /* Adjust height as needed */
}
</style>

<script setup>
import { Chart } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  BubbleController,
} from "chart.js";
import { ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  BubbleController
);

function generateRandomData(numPoints, deviation) {
  const pointsAbove = [];
  const pointsBelow = [];

  for (let i = 0; i < numPoints / 2; i++) {
    const x = Math.random() * 100;
    const yAbove = x + Math.random() * deviation;
    const yBelow = x - Math.random() * deviation;
    pointsAbove.push({ x: x, y: yAbove, r: 5 });
    pointsBelow.push({ x: x, y: yBelow, r: 5 });
  }

  return [...pointsAbove, ...pointsBelow];
}

const bubbleData = generateRandomData(100, 15);

const chartData = ref({
  datasets: [
    {
      type: "bubble",
      label: "Data Points",
      data: bubbleData,
      backgroundColor: "#5db7d380",
    },
    {
      type: "line",
      label: "Regression Line",
      data: [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: "Income (x$10,000)",
      },
      type: "linear",
      position: "bottom",
      min: 0,
      max: 100,
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Happiness score (0 to 10)",
      },
      min: 0,
      max: 100,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          if (tooltipItem.dataset.type === "bubble") {
            const data = tooltipItem.raw;
            return `Income: ${data.x}, Happiness: ${data.y}`;
          } else {
            return `${tooltipItem.dataset.label}: (${tooltipItem.raw.x}, ${tooltipItem.raw.y})`;
          }
        },
      },
    },
  },
});
</script>
