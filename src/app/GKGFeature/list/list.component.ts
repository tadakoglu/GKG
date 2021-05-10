import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  get listUsers() {
    return this.dataService.listUsers();
  }

  edit(userId) {
    this.router.navigate(['/GKGFeature/edit/' + userId])
  }


}
