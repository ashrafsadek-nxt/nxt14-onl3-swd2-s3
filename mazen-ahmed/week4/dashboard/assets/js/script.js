
  const gtx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(gtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
      datasets: [
        {
          label: 'Mentions',
          data: [160, 180, 210, 250, 270, 300, 290], 
          borderColor: '#3B82F6',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: 'Citations',
          data: [8, 10, 15, 18, 22, 20, 19], 
          borderColor: '#22C55E',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.4,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
         tooltip: {
      enabled: true 
    },
        legend: {
          labels: {
            color: '#FFFFFF', 
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#A4AFC1' }, 
          grid: { color: '#1C2A3A' }
        },
        y: {
          ticks: { color: '#A4AFC1' }, 
          grid: { color: '#1C2A3A' }
        }
      }
    }
  });


      const ctx = document.getElementById('myDoughnutChart').getContext('2d');

    const data = {
      labels: ['Critical', 'Warnings', 'Passing'],
      datasets: [{
        data: [2, 5, 23],
        backgroundColor: ['#4c7be9ff', '#FACC15', '#22C55E'],
        borderWidth: 0
      }]
    };

    const options = {
      cutout: '70%',
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#A4AFC1'
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });