import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getSearchQuery(value: any){
    const type = value.searchOption;
    const search = value.searchInput;
    if(type==="movies"){
      this.router.navigate([`/movies/movie/${search}`]);
    }
    else if(type==="actor"){
      this.router.navigate([`/actors/${search}`]);
    }
    else if(type==="producers"){
      this.router.navigate([`/producers/${search}`]);
    }
  }
}
