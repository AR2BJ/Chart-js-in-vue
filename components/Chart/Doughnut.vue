<template>
  <div class="chart-container ma-5">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important;
  height: 300px !important;
}
</style>

<script setup>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for Doughnut chart
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";

// Register components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement, // Register ArcElement for Doughnut chart
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // Labels for the Doughnut segments
  datasets: [
    {
      label: "My Doughnut Chart Dataset",
      data: [12, 19, 3, 5, 2, 3], // Data points
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false, // Allows for width and height to be controlled by CSS
  plugins: {
    legend: {
      display: true, // Display legend
      position: "top", // Legend position
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
