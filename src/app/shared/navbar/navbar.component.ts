 import { Component, OnInit } from '@angular/core'
 import { Router } from '@angular/router'

 @Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
 })
 export class NavbarComponent {
     constructor(
          private router: Router
     ) {

     }
     ngOnit() {
         
     }

     irUsuario(id: string){

         if(!id){
             return
         }

         this.router.navigate(['/usuario', id])
     }
 }
