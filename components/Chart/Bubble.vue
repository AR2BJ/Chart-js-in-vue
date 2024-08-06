<template>
  <div class="chart-container ma-5">
    <Bubble :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important; /* Adjust width as needed */
  height: 300px !important; /* Adjust height as needed */
}
</style>

<script setup>
import { Bubble } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  BubbleController,
} from "chart.js";
import { ref } from "vue";

// Register components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  BubbleController
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May", "June", "July"], // X-axis labels
  datasets: [
    {
      label: "Monthly Sales", // Dataset label
      data: [
        { x: 65, y: 59, r: 10 },
        { x: 80, y: 81, r: 15 },
        { x: 56, y: 55, r: 8 },
        { x: 40, y: 40, r: 20 },
        { x: 90, y: 27, r: 25 },
        { x: 10, y: 57, r: 35 },
        { x: 30, y: 22, r: 15 },
      ], // Data points
      borderColor: "#5db7d3", // Line color
      backgroundColor: "#5db7d380", // Fill color
      borderWidth: 2,
      fill: true, // Fill the area under the line
    },
    {
      label: "Expenses", // Second dataset label
      data: [
        { x: 28, y: 48, r: 12 },
        { x: 19, y: 19, r: 6 },
        { x: 86, y: 86, r: 18 },
        { x: 27, y: 27, r: 10 },
        { x: 40, y: 40, r: 20 },
      ], // Data points
      borderColor: "rgba(153, 102, 255, 1)", // Line color
      backgroundColor: "rgba(153, 102, 255, 0.2)", // Fill color
      borderWidth: 2,
      fill: true, // Fill the area under the line
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "X Values",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Y Values",
      },
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
          return `${tooltipItem.dataset.label}: (${tooltipItem.raw.x}, ${tooltipItem.raw.y}, ${tooltipItem.raw.r})`; // Custom tooltip label
        },
      },
    },
  },
});
</script>
