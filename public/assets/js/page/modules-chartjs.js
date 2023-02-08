"use strict";


var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Statistics',
      data: [10, 12, 12, 32, 12, 12, 12],
      borderWidth: 2,
      backgroundColor: '#2863a6',
      borderColor: '#2863a6',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#2863a6',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 15
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
  }
});

var cKonfirmasi = `<?php echo $status['konfirmasi']; ?>`;
var cKSelesai = `<?php echo $status['selesai']; ?>`;
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        cKonfirmasi,
        cKSelesai,
      ],
      backgroundColor: [
        '#ffa426',
         '#47c363',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Konfirmasi',
       'Selesai', 
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
  }
});