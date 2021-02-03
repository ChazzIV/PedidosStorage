import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from '../../../services/clientes.service';
import { IClientes } from '../../../interfaces/ICLientes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public cliente: Clientes;
  public formData: IClientes;
  // private dataSubscription:Subscription;
  formularioAgregar: FormGroup;

  constructor( private clientesService: ClientesService,
               private router: Router,
               private route: ActivatedRoute,
               public fb: FormBuilder,
               public formBuilder: FormBuilder) {
                // this.formData = {
                //   clienteID: null,
                //   nombre: null,
                //   apellido: null,
                //   direccion: null,
                // };
                }


  ngOnInit(): void {
    //const dato = JSON.parse( localStorage.getItem('clientes'));
    const dato = localStorage.getItem('editCliente');
    // console.log(dato);

    this.formularioAgregar = this.formBuilder.group( {
      clienteID: [],
      nombre: ['', [Validators.required]],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    });

    const data = this.clientesService.getClientebyId(+dato);
    this.formularioAgregar.setValue(data);
    // this.dataSubscription = this.route.data.subscribe(
    //   data => this.cliente = data.cliente,
    //   error => console.log(error)
    // );

  }

  // ngAfterContentInit():void {
  //   this.updateFormData();
  // }


  // ngOnDestroy(): void {
  //   this.dataSubscription.unsubscribe();
  // }

  // private updateFormData():void {
  //   // Object.keys(this.formData)
  //   //       .forEach( key => this.formData[key] = this.cliente[key]);
  // }

  onSubmit() {
    this.clientesService.actualizarCliente(this.formularioAgregar.value);
    this.router.navigate(['/']);
  }

}
