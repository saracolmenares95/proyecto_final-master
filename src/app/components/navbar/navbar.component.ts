import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @ViewChild('botonInicio') boton?: ElementRef;
    VerificarIdentidad: any
    controlFarmacia: any
    constructor() { }

    cerrar(){
        const cerrar = this.boton?.nativeElement
        setTimeout(() => {
            cerrar.click();
        }, 500);
    }
    ngOnInit(): void {
        if(localStorage.getItem('Nombre') == '[]') {
            localStorage.setItem('Nombre', '[]')
        }
        const verificar:any = localStorage.getItem('Nombre')
        this.VerificarIdentidad = JSON.parse(verificar)
        let guardando = `1${this.VerificarIdentidad}`
        guardando = guardando.replace(/\s{2,}/g, ' ').trim();
        const guardarControlFarmacia :any = localStorage.getItem(guardando)
        let guardar:any = JSON.parse(guardarControlFarmacia)
        this.controlFarmacia = [guardar]
    }



}
