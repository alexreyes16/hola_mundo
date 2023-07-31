import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private cliente:Clientes[]=[
    {
      // 1
      codigo:"001",
  fecha:"2023-07-24",
  cliente:"Jose Gonzalez",
  tipo:"WhatsApp",
  descripcion:"Consulta"
    },{
      // 2
      codigo:"002",
  fecha:"2023-07-15",
  cliente:"Maria Gonzalez",
  tipo:"Telefono fijo",
  descripcion:"Consulta"
    },{
      // 3
      codigo:"003",
  fecha:"2023-07-10",
  cliente:"Maria Pérez",
  tipo:"Instagram",
  descripcion:"Consulta"
    },{
      // 4
      codigo:"004",
  fecha:"2023-07-01",
  cliente:"Leonardo Chavez",
  tipo:"Facebook",
  descripcion:"Consulta"
    },{
      // 5
      codigo:"005",
  fecha:"2023-07-05",
  cliente:"Rafael Correa",
  tipo:"Celular",
  descripcion:"Consulta"
    },{
      // 6
      codigo:"006",
  fecha:"2023-07-06",
  cliente:"Marcos Avilez",
  tipo:"Telefono fijo",
  descripcion:"Consulta"
    },{
      // 7
      codigo:"007",
  fecha:"2023-07-16",
  cliente:"Manuel Chavez",
  tipo:"Facebook",
  descripcion:"Consulta"
    },{
      // 8
      codigo:"008",
  fecha:"2023-07-22",
  cliente:"Carlos Bolaños",
  tipo:"Instragram",
  descripcion:"Consulta"
    },{
      // 9
      codigo:"009",
  fecha:"2023-07-11",
  cliente:"Manuel Guerrero",
  tipo:"WhatsApp",
  descripcion:"Consulta"
    },{
      // 10
      codigo:"010",
  fecha:"2023-07-29",
  cliente:"Alex Reyes",
  tipo:"Telefono fijo",
  descripcion:"Consulta"
    }
  ];
  private usuario:Usuarios[]=[
    {
      usuario:"alex",
      password:"2001",
      tipo:"Admin"
  },{
    usuario:"eduardo",
    password:"2001",
    tipo:"Invitado"
}
  ];
  getClientes(){
    return this.cliente;
  }
  getCliente(idx: number):Clientes{
    return this.cliente[idx];
  }
  constructor(){
    console.log("Listo para usar");
  }
  buscarCliente(nom:string):number{
    let ind =-1;
    for(let i=0;i<this.cliente.length;i++){
      if(nom.toLowerCase()==this.cliente[i].cliente.toLowerCase()){
        ind=i;
        break;
      }
    }
    return ind;
  }
  modificar(cli:Clientes){

      }
      eliminar(id:number){
        this.cliente.splice(id,1);
      }
  login(usu:string,pass:string):string{
    let ind ="";
    for(let i=0;i<this.usuario.length;i++){
      if(usu==this.usuario[i].usuario && pass==this.usuario[i].password){
        ind=this.usuario[i].tipo;
        break;
      }
    }
    return ind;
  }
}

export interface Clientes{
  codigo:string;
  fecha:string;
  cliente:string;
  tipo:string;
  descripcion:string;
}
export interface Usuarios{
  usuario:string;
  password:string;
  tipo:string;
}
