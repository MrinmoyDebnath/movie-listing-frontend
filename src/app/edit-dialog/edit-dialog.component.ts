import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(private api: ApiServiceService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {}
  sendData(data: any){

    const path:any = this.route.snapshot.paramMap;
    const movie = {
      id: path.params.movie || null,
      name: data.movie  || null,
      plot: data.plot  || null,
      poster: data.poster  || null,
      actors: data.actors.split(',')[0]!==''? data.actors.split(',') : null 
    }
    this.api.editMovie(movie).subscribe(data=>{
      this.router.navigate([".."]);
    })
  }
  cancel(){
    this.router.navigate([".."]);
  }
}
