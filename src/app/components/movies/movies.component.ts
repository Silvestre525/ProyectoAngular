import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  p: number = 1; 

  constructor(private MoviesSer: MoviesService ){

  }

  ngOnInit(): void {
    this.getMovies();
  }

  //Get logico
  getMovies(): void{
    this.MoviesSer.getMovies().subscribe( data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
