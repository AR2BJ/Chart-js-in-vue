<template>
  <div class="chart-container ma-5">
    <PolarArea :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important; /* Adjust width as needed */
  height: 300px !important; /* Adjust height as needed */
}
</style>

<script setup>
import { PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  PolarAreaController,
} from "chart.js";
import { ref } from "vue";

// Register components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  PolarAreaController
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May", "June", "July"], // Labels for segments
  datasets: [
    {
      label: "Monthly Sales", // Dataset label
      data: [65, 59, 80, 81, 56, 55, 40], // Data points
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ], // Background colors for each segment
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ], // Border colors for each segment
      borderWidth: 2,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Values",
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
          return `${tooltipItem.label}: ${tooltipItem.raw}`; // Custom tooltip label
        },
      },
    },
  },
});
</script>
