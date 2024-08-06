<template>
  <div class="chart-container ma-5">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important; /* Adjust width as needed */
  height: 300px !important; /* Adjust height as needed */
}
</style>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  BarController,
} from "chart.js";
import { ref } from "vue";

// Register components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  BarController
);

const chartData = ref({
  labels: ["January", "February", "March", "April", "May", "June", "July"], // Labels for each group
  datasets: [
    {
      label: "Monthly Sales", // Dataset label
      data: [65, 59, 80, 81, 56, 55, 40], // Data points
      borderColor: "#5db7d3", // Border color for bars
      backgroundColor: "#5db7d380", // Fill color for bars
      borderWidth: 2,
    },
    {
      label: "Expenses", // Second dataset label
      data: [28, 48, 40, 19, 86, 27, 90], // Data points
      borderColor: "rgba(153, 102, 255, 1)", // Border color for bars
      backgroundColor: "rgba(153, 102, 255, 0.2)", // Fill color for bars
      borderWidth: 2,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "category",
      title: {
        display: true,
        text: "Months",
      },
    },
    y: {
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
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Custom tooltip label
        },
      },
    },
  },
});
</script>
