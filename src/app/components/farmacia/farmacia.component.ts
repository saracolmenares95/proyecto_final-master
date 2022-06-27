import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmaciaService } from '../../services/farmacia.service'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-farmacia',
    templateUrl: './farmacia.component.html',
    styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit {
    @ViewChild('inputleer') input?: ElementRef
    farmacia: any
    cantidad: any
    carritoGlobal: any
    preciototal: any
    afiliado: any
    constructor(private _servicio: FarmaciaService, private renderer2: Renderer2) { }

    agregarproducto(idProducto: any) {
        const input1 = this.input?.nativeElement
        let carrito: any = ''
        if (localStorage.getItem("precio_total") == null) {
            localStorage.setItem("precio_total", JSON.stringify(idProducto.precio))
        } else {
            var precio_total: any = localStorage.getItem("precio_total")
            precio_total = parseInt(precio_total) + parseInt(idProducto.precio)
            this.preciototal = precio_total
            localStorage.setItem("precio_total", precio_total)
        }

        if (localStorage.getItem("carrito") == null) {
            carrito = []
        } else {
            let carrito1: any = localStorage.getItem("carrito")
            carrito = JSON.parse(carrito1)
        }
        let numer: any = Math.random()
        let numer1: any = numer.toString()
        let numer2 = numer1.slice(2, 6)
        const objCarrito = {
            _id: idProducto._id,
            medicamento: idProducto.medicamento,
            precio: idProducto.precio,
            inventario: idProducto.inventario,
            random: numer2
        }
        carrito.push(objCarrito)

        this.carritoGlobal = carrito
        localStorage.setItem("carrito", JSON.stringify(carrito))

        if (localStorage.getItem(idProducto.medicamento) == null)
            localStorage.setItem(idProducto.medicamento, "0");

        let counterValue = Number(localStorage.getItem(idProducto.medicamento))
        localStorage.setItem(idProducto.medicamento, JSON.stringify(counterValue + 1));
        let valor: any = Number(localStorage.getItem(idProducto.medicamento))

    }
    descontarProducto(idProducto: any) {
        if (localStorage.getItem("precio_total") == null) {
            localStorage.setItem("precio_total", JSON.stringify(idProducto.precio))
        } else {
            var precio_total: any = localStorage.getItem("precio_total")
            precio_total = parseInt(precio_total) - parseInt(idProducto.precio)
            localStorage.setItem("precio_total", precio_total)
            this.preciototal = precio_total
        }
        let nuevoArreglo = this.carritoGlobal.filter((carrito: any) => carrito._id == idProducto._id)
        nuevoArreglo = nuevoArreglo[0]
        let arregloDelfuturo = this.carritoGlobal.filter((carrito: any) => carrito.random !== nuevoArreglo.random)
        this.carritoGlobal = arregloDelfuturo
        localStorage.setItem("carrito", JSON.stringify(this.carritoGlobal))

        if (localStorage.getItem(idProducto.medicamento) == null)
            localStorage.setItem(idProducto.medicamento, "0");
        let counterValue = Number(localStorage.getItem(idProducto.medicamento))
        localStorage.setItem(idProducto.medicamento, JSON.stringify(counterValue - 1));
        let valor: any = Number(localStorage.getItem(idProducto.medicamento))
    }


    resumenCompra() {
        let resumenCompraUsuario: any = localStorage.getItem("carrito")
        resumenCompraUsuario = JSON.parse(resumenCompraUsuario)
        let carro: any = ''
        if (localStorage.getItem("carro ") == null) {
            carro = []
        } else {
            let carrito1: any = localStorage.getItem("carro ")
            carro = JSON.parse(carrito1)
        }
        resumenCompraUsuario.forEach((producto: any, indice: any) => {
            let existe = false;
            for (let x = 0; x < indice; x++) {
                if (producto._id == resumenCompraUsuario[x]._id) {
                    existe = true;
                }

            }
            if (existe == false) {
                this.cantidad = 0

                resumenCompraUsuario.forEach((productoCantidad: any) => {
                    if (producto._id == productoCantidad._id) {
                        this.cantidad++
                    }
                })

                let objcarro = {
                    _id: producto._id,
                    medicamento: producto.medicamento,
                    precio: producto.precio,
                    inventario: producto.inventario,
                    random: producto.random,
                    cantidad: this.cantidad
                }
                carro.push(objcarro)
                this.carritoGlobal = carro
                localStorage.setItem("carro", JSON.stringify(carro))
            }
            var precio_total: any = localStorage.getItem("precio_total")
            this.preciototal = precio_total

        });
    }

    // recorrer() {
    //     this.afiliado.forEach((element: any) => {
    //         this.afiliado = element.afiliado
    //     });
    //     console.log(this.afiliado)
    // }



    ngOnInit(): void {
        this._servicio.getfarmacias().subscribe(data => {
            this.farmacia = data
            console.log(this.farmacia)
        }, error => {
            console.log(error)
        })
        if(localStorage.getItem('Nombre') == '[]') {
            localStorage.setItem('Nombre', '[]')
        }
        let verificar:any = localStorage.getItem('Nombre')
        let verificando = JSON.parse(verificar)

        let nombreF = `1${verificando[0]}`
        nombreF = nombreF.replace(/\s{2,}/g, ' ').trim();
        const guardandoAfiliado :any= localStorage.getItem(nombreF)
        this.afiliado = JSON.parse(guardandoAfiliado)
        const hola:any = this.afiliado.afiliado
        this.afiliado = hola
        console.log(this.afiliado)

    }
}
