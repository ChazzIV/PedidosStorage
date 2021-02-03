import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Productos } from '../../../models/productos';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  
  formularioAgregar: FormGroup;
  producto: Productos = new Productos();
  
  constructor( private fb: FormBuilder,
               public productosService: ProductosService,
               private router: Router) { }

  ngOnInit(): void {

    this.formularioAgregar = this.fb.group( {
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  agregar() {
    // this.producto = this.formularioAgregar.value as Productos;
    // this.productosService.agregarLocalStorage(this.producto);
    // this.formularioAgregar.reset();

    this.productosService.agregarLocalStorage(this.formularioAgregar.value);
    this.router.navigateByUrl('/productos');
  }

}
