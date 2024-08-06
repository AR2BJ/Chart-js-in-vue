<template>
  <div class="chart-container ma-5">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<style>
.chart-container {
  width: 400px !important;
  height: 300px !important;
}
</style>

<script setup>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for Pie chart
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";

// Register the required components for a Pie chart
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for Pie chart
);

const chartData = ref({
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: 'My Pie Chart Dataset',
      data: [12, 19, 3, 5, 2, 3], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
