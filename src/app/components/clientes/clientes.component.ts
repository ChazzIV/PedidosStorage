import { Component, OnInit } from '@angular/core';
import { IClientes } from '../../interfaces/ICLientes';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  // clientes: Array<IClientes> = new Array<IClientes>();
  // productos: Array<IProductos> = new Array<IProductos>();
  constructor() { }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre: 'Marcelo',
    //   apellido: 'najera',
    //   edad: 23
    // },
    // {
    //   nombre: 'Carmen',
    //   apellido: 'putona',
    //   edad: 23
    // })

    // this.productos.push({
    //   nombre: 'coca',
    //   precio: 15
    // },
    // {
    //   nombre: 'agua',
    //   precio: 12
    // }
    // )
  }

  // guardarCliente() {
  //   let clientesAgregar: Array<IClientes> = new Array<IClientes>();
  //   clientesAgregar.push({
  //     nombre: 'Marcelo',
  //     apellido: 'najera',
  //     edad: 23
  //   },
  //   {
  //     nombre: 'Carmen',
  //     apellido: 'putona',
  //     edad: 23
  //   })
  //   localStorage.setItem('clientes', JSON.stringify(clientesAgregar));
  // }


  // guardarProductos() {
  //   let productosAgregar: Array<IProductos> = new Array<IProductos>();
  //   productosAgregar.push({
  //       nombre: 'coca',
  //       precio: 15
  //     },
  //     {
  //       nombre: 'agua',
  //       precio: 12
  //     })
  //   localStorage.setItem('productos', JSON.stringify(productosAgregar));
  // }

  // leer() {
  //   // this.clientes = JSON.parse( localStorage.getItem('clientes') );
  //   // this.productos = JSON.parse( localStorage.getItem('productos') );
  // }

  // eliminarClientes() {
  //   localStorage.removeItem('clientes')
  // }

  // eliminarProductos() {
  //   localStorage.removeItem('productos')
  // }

  // eliminarTodos() {
  //   localStorage.clear();
  // }


  // get ClientesLocales(): IClientes[] {
  //   let clientesLocalStorage: IClientes[] = JSON.parse( localStorage.getItem('clientes'));
  //   if (clientesLocalStorage == null) {
  //     return new Array<IClientes>();
  //   }
  //   return clientesLocalStorage
  // }

  // get ProductosLocales(): IProductos[] {
  //   let productosLocalStorage: IProductos[] = JSON.parse( localStorage.getItem('productos'));
  //   if (productosLocalStorage == null) {
  //     return new Array<IProductos>();
  //   }
  //   return productosLocalStorage
  // }

}
