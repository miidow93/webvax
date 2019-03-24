import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  @Input() title: string;
  @Input() customClass: string;
  @Input() customId: string;
  @Input() customImg: string;
  
  constructor() { }

  ngOnInit() {
  }

}
