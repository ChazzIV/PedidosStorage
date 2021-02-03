import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();

  cliente: Clientes[];

  constructor(public clientesService: ClientesService,
              public pedidosService: PedidosService,
              private router: Router) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }


  obtenerClientes() {
    this.clientes = this.clientesService.clientesLocalStorage;
  }

  buscarClientes(nombreBuscar) {
    // let nombreBuscar: string = event.target.value;  variable donde guarda el nombre
    this.clientes = this.clientesService.clientesLocalStorage.filter( (cliente) => {
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
      // if (cliente.nombre.toLocaleLowerCase().includes(nombreBuscar)){ 
      //   return true;
      // } if (cliente.apellido.toLocaleLowerCase().includes(apellidoBuscar)){
      //   return false;
      // }
    });
  }

  irProductos(cliente: Clientes) {
    this.pedidosService.pedido.clienteID = cliente.clienteID;
    this.pedidosService.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;
    this.pedidosService.guardarLocalStorage();
    this.router.navigateByUrl('/productos');
  }


  eliminar(cliente: Clientes){
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${cliente.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        Swal.fire({
          text: 'Se elimino correctamente',
          icon: 'success'
        });
        
        this.clientesService.eliminarCliente(cliente);
        this.obtenerClientes();
      }
    });
  }

  actualizar(cliente: Clientes) {
    // console.log(cliente);
    localStorage.removeItem('editCliente');
    // localStorage.setItem('editCliente', JSON.stringify(cliente));
    localStorage.setItem('editCliente', cliente.clienteID.toString());
    this.router.navigateByUrl(`editar-Cliente/${cliente.clienteID}/editar`);
  }


}
