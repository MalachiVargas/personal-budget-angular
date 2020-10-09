import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#ed6b19',
          '#cd6b19',
          '#bd6b19',
        ],
      },
    ],
    labels: [],
  };

  createChart(data) {

    for (var i = 0; i < data.myBudget.length; i++) {
      this.dataSource.datasets[0].data[i] = data.myBudget[i].budget;
      this.dataSource.labels[i] = data.myBudget[i].title;
    }

    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource,
    });
  }

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.getDataChart().subscribe((data: any) => {
      this.createChart(data);
    });
  }
}
