import { Component,OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  persona:Persona = new Persona();
  constructor(private reouter:Router, private service:ServiceService){}

  ngOnInit(): void {
      
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Persona ha sido creada con exito!!..")
      this.reouter.navigate(["list"]);
    })
  }
}