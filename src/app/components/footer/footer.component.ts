import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerForm: FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/

  constructor(private fb: FormBuilder) { 
    this.footerForm = this.fb.group({
      correo: ["", [Validators.required, Validators.pattern(this.regexCorreo)]]
    })
  }

  ngOnInit(): void {
  }
agregarCorreo(){
  console.log(this.footerForm)
  console.log(this.footerForm.get('correo')?.value)
}
}
