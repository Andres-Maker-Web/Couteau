import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { DetNameServiceService } from './det-name-service.service';

@Component({
  selector: 'app-det-name',
  templateUrl: './det-name.page.html',
  styleUrls: ['./det-name.page.scss'],
})
export class DetNamePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal ;
  message= 'Este es su resultado';
  name: any;
  age: any;

  confirm()
  {
    this.modal.dismiss(null, 'confirm');
  }

  
  constructor(private detNameService: DetNameServiceService) {}
  agify()
  {
    this.detNameService.getAgeDetermination(this.name).subscribe(res=> {
      this.age= res.age;
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
