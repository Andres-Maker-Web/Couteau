import { Component, OnInit } from '@angular/core';
import { DetGenderServiceService } from './det-gender-service.service';

@Component({
  selector: 'app-det-gender',
  templateUrl: './det-gender.page.html',
  styleUrls: ['./det-gender.page.scss'],
})
export class DetGenderPage implements OnInit {
  name: any;
  btnColor: string= "success"

  constructor(private detGenderServiceService: DetGenderServiceService) { }
  genderize() {
    this.detGenderServiceService.getGenderDetermination(this.name).subscribe(res => {
      const gender= res.gender;

      if(gender=== "male"){
        this.btnColor= "primary"
      } else if (gender=== "female")
      {
        this.btnColor= "secondary"
      } else
      {
        this.btnColor= "success"
      }
      console.log(res);
    });
  }

  ngOnInit() {

  }

}
