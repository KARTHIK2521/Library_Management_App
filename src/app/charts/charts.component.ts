import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { AddBookService } from '../shared/service/addBook/add-book.service';
Chart.register(...registerables);


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor( private bookService: AddBookService){
  }

  chartData:any;
  labelData:string[]=[];
  qtyData:number[]=[];


  ngOnInit(): void {
    this.bookService.getBookDetails().subscribe(result=>{
     // console.log(result);
      this.chartData=result;

      if(this.chartData!=null){

        this.chartData.map(o=>{
          this.labelData.push(o.name);
          this.qtyData.push(o.qty);
        })
         //console.log(this.labelData);
       this.renderChart(this.labelData,this.qtyData);
       this.renderPieChart(this.labelData,this.qtyData);

      }
    })
  }

  renderChart(labelData:any,qtyData:any){
    const myChart = new Chart("barchart", {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: 'No of Books',
          data: qtyData,
          backgroundColor:['rgba(46, 93, 176,1)'],
          borderWidth: 1,

        }]
      },
      options: {
        layout: {
          padding: {
                left:40
          } ,
      },
      }
    });

  }

  renderPieChart(labelData:any, qtyData:any){
    const myChart = new Chart("piechart", {
      type: 'pie',
      data: {
        labels: labelData,
        datasets: [{
          label: 'No of Books',
          data: qtyData,
          backgroundColor:['rgb(54, 162, 235)','rgb(44, 130, 201)','rgba(249, 105, 14, 0.98)',
            'rgb(249, 180, 45)','rgb(151, 140, 140)', 'rgba(249, 105, 14, 0.98)'
          ],
          borderWidth: 1,

        }]
      },
      options: {

      }
    });
  }

}
