import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugerenciaService } from '../../services/sugerencia.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  
  list;
  constructor(
    private route: ActivatedRoute,
    private sugerenciaService: SugerenciaService,
  ) {
    this.getList();
  }
  ngOnInit() {
    this.getList();
  }
  private getList() {
    this.sugerenciaService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id) {
    console.log("delete:"+id);
    this.sugerenciaService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
