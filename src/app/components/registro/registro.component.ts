import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  cliente:any=[];
  constructor(private activatedRoute:ActivatedRoute, private _registro:RegistroService,private router:Router){
  this.activatedRoute.params.subscribe(params =>{
    this.cliente=_registro.getCliente(params['id']);
  console.log(this.cliente);
  })
  }
  cancelar(){
    this.router.navigate(['home']);
  }
}
