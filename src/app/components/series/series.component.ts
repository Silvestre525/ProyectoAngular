import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series/series.service';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: any[] = [];
  filteredSeries: any[] = [];
  searchText = '';
  p: number = 1;

  constructor(private SerieServ: SeriesService ){

  }

  ngOnInit(): void {
    this.getSeries();
  }

    //Get logico
    getSeries(): void{
      this.SerieServ.getSeries().subscribe(data=> {
        this.series = data.results as Character[];
        console.log(this.series);
        this.p = 1;
      });
    }

}
