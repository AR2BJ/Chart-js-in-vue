<template>
  <div class="chart-container ma-5">
    <Scatter :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important; /* Adjust width as needed */
  height: 300px !important; /* Adjust height as needed */
}
</style>

<script setup>
import { Scatter } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LinearScale,
  ScatterController,
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
  ScatterController
);

const chartData = ref({
  datasets: [
    {
      label: "Monthly Sales", // Dataset label
      data: [
        { x: 1, y: 65 },
        { x: 2, y: 59 },
        { x: 3, y: 80 },
        { x: 4, y: 81 },
        { x: 5, y: 56 },
        { x: 6, y: 55 },
        { x: 7, y: 40 },
      ], // Data points
      borderColor: "#5db7d3", // Point border color
      backgroundColor: "#5db7d380", // Point fill color
      borderWidth: 2,
    },
    {
      label: "Expenses", // Second dataset label
      data: [
        { x: 1, y: 28 },
        { x: 2, y: 48 },
        { x: 3, y: 40 },
        { x: 4, y: 19 },
        { x: 5, y: 86 },
        { x: 6, y: 27 },
        { x: 7, y: 90 },
      ], // Data points
      borderColor: "rgba(153, 102, 255, 1)", // Point border color
      backgroundColor: "rgba(153, 102, 255, 0.2)", // Point fill color
      borderWidth: 2,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      title: {
        display: true,
        text: "Months",
      },
      ticks: {
        callback: function (value, index, values) {
          // Convert numeric month value to month name
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ];
          return monthNames[value - 1];
        },
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
          return `${tooltipItem.dataset.label}: (${tooltipItem.raw.x}, ${tooltipItem.raw.y})`; // Custom tooltip label
        },
      },
    },
  },
});
</script>
