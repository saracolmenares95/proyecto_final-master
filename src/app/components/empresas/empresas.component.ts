import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

    formulario: FormGroup
    revisarcorreo =  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    constructor(private fb: FormBuilder) {
        this.formulario = fb.group({

            nombre : ['' , Validators.required],
            documento : ['', Validators.compose([
                Validators.required,
                Validators.maxLength(10),
                Validators.minLength(8)
            ])],
            email : ['', [Validators.required , Validators.pattern(this.revisarcorreo)]]

        })

    }

    enviardatos() {
    }

    ngOnInit(): void {
    }

}
