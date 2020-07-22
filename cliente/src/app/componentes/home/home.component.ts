import { Component, OnInit } from '@angular/core';
import { FirmadosService } from '../../services/firmados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firmados = [];

  constructor(
    private firmadosService: FirmadosService
  ) { }

  ngOnInit(): void {
    this.firmadosService.getContentIn()
      .subscribe(
        res => {
          console.log(res);
          this.firmados = res;
        },
        err => console.log(err)
      )
  }

}
