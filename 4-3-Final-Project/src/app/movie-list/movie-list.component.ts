import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
_id: string;
title: string;
genre: string[];
release_year: number;
directors: string[];
actors: string[];
plot: string;
rating: number;
}

@Component({
selector: 'app-movie-list',
template: `
<h2>Movies</h2>
<ul>
<li *ngFor="let movie of movies">
{{ movie.title }} ({{ movie.release_year }})
</li>
</ul>
`,
})
export class MovieListComponent implements OnInit {
movies: Movie[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
this.http.get<Movie[]>('http://localhost:3000/movies').subscribe(
(movies) => {
this.movies = movies;
},
(error) => {
console.error('Error retrieving movies:', error);
}
);
}
}
