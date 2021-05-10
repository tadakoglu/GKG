import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    let userId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('userId'))

    if (userId) { // update
      this.title = 'Kullanıcıyı Düzenle '
      this.loadModel(userId);

    }
    else { // add
      this.title = 'Yeni Kullanıcı Ekle + '
    }
  }

  loadModel(userId) {
    let model = this.dataService.listUsers().find(u => u.id == userId);
    if(model){
      this.user = JSON.parse(JSON.stringify(model)) // clone
      this.loadDatepicker(this.user.birthday)
    }
    else{
      this.goToListPage();
    }
  }

  title: string

  user = new User();

  createUser(form: NgForm) {
    this.formSubmitted = true
    if (form.valid) {

      if(this.user.id){ // update
        this.dataService.editUser(this.user);
        this.goToListPage();
      }
      else{ // add
        this.dataService.addUser(this.user);
        this.goToListPage();
      }
     
    }
  }
  goToListPage() {
    this.router.navigate(['/GKGFeature/list'])
  }

  public birthday


  loadDatepicker(date: string) {
    //  Back-end'den gelen format: // 2020-07-22T18:00+0300  (SQL Server/Datetime formatı)
    this.birthday = new Date(date);
    this.user.birthday = this.birthday ? this.birthday.toISOString() : undefined;;
  }

  get getCountries(): string[] {
    return this.dataService.getCountries();
  }
  formSubmitted = false
}
