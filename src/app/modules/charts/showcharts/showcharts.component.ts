import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-showcharts',
  templateUrl: './showcharts.component.html',
  styleUrl: './showcharts.component.scss'
})
export class ShowchartsComponent {

  pieChartOption = {
    title: {
      text: 'Sales Distribution',
      subtext: '2025 Sales Report',
      left: 'center',
      textStyle: {
        fontSize: 24,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Marketing', 'Referral', 'Others']
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Marketing' },
          { value: 234, name: 'Referral' },
          { value: 135, name: 'Others' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        animation: true, // Enable animation for the chart
        animationDuration: 1000, // Animation duration for pie chart transition
        animationEasing: 'elasticOut', // Easing function for animation
      }
    ]
  };

  
  

  public lineChartType: ChartType = 'line';
  public lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 5],
        label: 'Series A',
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true
      }
    ]
  };
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount'
        }
      }
    }
  };


  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Series A',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF5733',
        borderWidth: 1
      }
    ]
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Month' } },
      y: { title: { display: true, text: 'Values' } }
    }
  };

  public radarChartType: ChartType = 'radar';

  public radarChartData: ChartData<'radar'> = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF5733',
        borderWidth: 1
      }
    ]
  };

  public radarChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  public pieChartType: ChartType = 'pie';

  public pieChartData: ChartData<'pie'> = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF5733', '#36A2EB', '#FFEB3B'],
      }
    ]
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF5733', '#36A2EB', '#FFEB3B'],
      }
    ]
  };

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
  };


  public polarAreaChartType: ChartType = 'polarArea';

  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: ['Red', 'Green', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ['#FF5733', '#36A2EB', '#FFEB3B', '#FF4500'],
      }
    ]
  };

  public polarAreaChartOptions: ChartOptions = {
    responsive: true,
  };


  public bubbleChartType: ChartType = 'bubble';

  public bubbleChartData: ChartData<'bubble'> = {
    datasets: [
      {
        label: 'Series A',
        data: [{ x: 10, y: 20, r: 15 }, { x: 15, y: 25, r: 10 }, { x: 25, y: 30, r: 20 }],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF5733',
        borderWidth: 1
      }
    ]
  };

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };


  public scatterChartType: ChartType = 'scatter';
  public scatterChartData: ChartData<'scatter'> = {
    datasets: [
      {
        label: 'Series A',
        data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF5733',
        borderWidth: 1
      }
    ]
  };

  public scatterChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true }
    }
  };

}
