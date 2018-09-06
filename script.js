const arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

function barCharts() {
    const chart = document.getElementById('chart');
    for (let i = 0; i < arr.length; i++) {
        let divChart = document.createElement('div');

        divChart.style.height = arr[i]*30+'px';
        divChart.style.width = 30 + 'px';

        if (arr[i] > 0 && arr[i] <= 5) {
            divChart.style.background = 'green';
        } else if (arr[i] > 5 && arr[i] <= 10) {
            divChart.style.background = 'yellow';
        }else if (arr[i] > 10) {
            divChart.style.background = 'tomato';
        }

        chart.appendChild(divChart);
    }
}

barCharts();