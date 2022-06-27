import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
citasPaciente:any
CitasGlobales:any
id:any
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('control-medico') == '[]') {
        localStorage.setItem('control-medico', '[]')
    }
    const verificar:any = localStorage.getItem('control-medico')
    this.citasPaciente = JSON.parse(verificar)
    console.log(this.citasPaciente)
}
tomando(id:any) {
    this.id = id
    const arregloGlobal:any = localStorage.getItem('control-medico')
    const arregloGlobal1:any = JSON.parse(arregloGlobal)
    const nuevoArregloGlobal = arregloGlobal1.filter((arregloViejo1: any) => arregloViejo1.id == this.id)
    localStorage.setItem('datos-medico', JSON.stringify(nuevoArregloGlobal))
}
Elimiando(id: any){
this.id = id
        Swal.fire({
            title: 'Esta Seguro?',
            text: "Esta accion no sea reversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                const arregloGlobal:any = localStorage.getItem('control-medico')
                const arregloGlobal1:any = JSON.parse(arregloGlobal)
                const nuevoArregloGlobal = arregloGlobal1.filter((arregloViejo1: any) => arregloViejo1.id !== this.id)
                this.CitasGlobales = nuevoArregloGlobal
                localStorage.setItem('control-medico', JSON.stringify(this.CitasGlobales))
                this.id = null
                const pepe:any = localStorage.getItem('control-medico')
                this.citasPaciente = JSON.parse(pepe)
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado correctamente.',
                    'success'
                )
            }
        })
    }
}

