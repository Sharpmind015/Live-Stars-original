// Dashboard Charts
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: 'Visited',
            data: [5, 100, 90, 80, 78, 79, 55, 45, 100, 15],
            borderWidth: 1,
            backgroundColor: '#404295'
        }, {
            label: 'Attended',
            data: [75, 50, 78, 48, 20, 55, 10, 75, 80, 10]
        }]
    },
    options: {
        legend: {
          position: 'bottom'
        },
        scales: {
        }
    }
}); 