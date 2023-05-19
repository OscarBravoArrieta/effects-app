 import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
 import { UsuarioService } from 'src/app/services/usuario.service';

 @Component({
     selector: 'app-lista',
     templateUrl: './lista.component.html',
     styleUrls: ['./lista.component.scss']
 })
 export class ListaComponent {
     usuarios: Usuario[] = []
     constructor(
         public usuarioService: UsuarioService
     ){ }

     ngOnInit(){
         this.usuarioService.getUsers()
         .subscribe(users => {
             console.log(users)
             this.usuarios = users;
         })
     }
 }
