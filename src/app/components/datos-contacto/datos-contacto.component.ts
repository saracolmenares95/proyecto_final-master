import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto1Service } from '../../services/contacto1.service'
import Swal from 'sweetalert2'
import { ContactoActualizar } from '../.././../models/actualizar';
@Component({
    selector: 'app-datos-contacto',
    templateUrl: './datos-contacto.component.html',
    styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {
    Controlmedico: FormGroup
    objetoDeControlMedico: any
    guardandoEmail: any
    ContactoActualizar: [] = []
    constructor(private fb: FormBuilder, private _servicio: Contacto1Service, private router: Router) {
        this.Controlmedico = fb.group({
            nombre: ['', Validators.required],
            edad: ['', Validators.required],
            genero: ['', Validators.required],
            documento: ['', Validators.required],
            celular: ['', Validators.required],
            sintomas: ['', Validators.required],
            tratamiento: ['', Validators.required],
            medicamento1: [''],
            medicamento2: [''],
            medicamento3: [''],
            tipoD: [''],
            email: ['', Validators.required],
            afiliado: ['', Validators.required],
        })
    }
    enviardatos() {
        this.objetoDeControlMedico = [{
            nombre: this.Controlmedico.get('nombre')?.value,
            documento: this.Controlmedico.get('documento')?.value,
            tratamiento: this.Controlmedico.get('tratamiento')?.value,
            tipoD: this.Controlmedico.get('tipoD')?.value,
            medicamento1: this.Controlmedico.get('medicamento1')?.value,
            medicamento2: this.Controlmedico.get('medicamento2')?.value,
            medicamento3: this.Controlmedico.get('medicamento3')?.value
        }]
        console.log(this.objetoDeControlMedico)
        let numer: any = Math.random()
        let numer1: any = numer.toString()
        let numer2 = numer1.slice(2, 6)


        let objeto: ContactoActualizar = {
            email: this.Controlmedico.get('email')?.value,
            documento: this.Controlmedico.get('documento')?.value,
            random: numer2,
            afiliado: this.Controlmedico.get('afiliado')?.value
        }

        let farmaciaControl = {
            nombre: this.Controlmedico.get('nombre')?.value,
            documento: this.Controlmedico.get('documento')?.value,
            tratamiento: this.Controlmedico.get('tratamiento')?.value,
            tipoD: this.Controlmedico.get('tipoD')?.value,
            medicamento1: this.Controlmedico.get('medicamento1')?.value,
            medicamento2: this.Controlmedico.get('medicamento2')?.value,
            medicamento3: this.Controlmedico.get('medicamento3')?.value,
            afiliado: this.Controlmedico.get('afiliado')?.value,
            random: numer2
        }

        let nombreF =`1${farmaciaControl.nombre}`
        nombreF = nombreF.replace(/\s{2,}/g, ' ').trim();
        localStorage.setItem(nombreF, JSON.stringify(farmaciaControl))

        console.log(`${farmaciaControl.nombre} 1`)
        this._servicio.putContacto(objeto).subscribe(data => {
            Swal.fire({
                title: 'Paciente actualizado!',
                text: 'Se guardaron los cambios en el producto',
                icon: 'success',
                confirmButtonText: 'Vale'
            })
            localStorage.setItem('datos-medico', '')
        }, error => {
            console.log(error)
        })



    }
    llenando() {
        const objeto: any = localStorage.getItem('datos-medico')
        const respuestaobjeto = JSON.parse(objeto)
        const resultado = respuestaobjeto[0]
        this.guardandoEmail = resultado.email
        this.Controlmedico.setValue({
            nombre: resultado.nombre,
            documento: resultado.documento,
            email: resultado.email,
            edad: [''],
            genero: [''],
            tipoD: [''],
            celular: [''],
            sintomas: resultado.sintomas,
            tratamiento: [''],
            medicamento1: [''],
            medicamento2: [''],
            medicamento3: [''],
            afiliado: ['']
        })
    }
    redirigir() {
        this.router.navigate(['/control'])
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }
    ngOnInit(): void {
        this.llenando()
    }

}
