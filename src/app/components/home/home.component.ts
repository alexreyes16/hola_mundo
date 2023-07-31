import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes,RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
Cliente:Clientes[]=[];
ngOnInit(): void {
  this.Cliente = this._registro.getClientes();
  console.log(this.Cliente);
 }
constructor(private _registro:RegistroService,private router:Router){}
eliminar(idx:number){
  this._registro.eliminar(idx);
  this.Cliente = this._registro.getClientes();

}
modCliente(idx:number){
  console.log(idx);
  this.router.navigate(['registro',idx]);
}
}
