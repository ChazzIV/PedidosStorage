import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from '../../../services/pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {
  listadoPedidos: Pedido[] = new Array<Pedido>();

  constructor(public pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }


  obtenerPedidos() {
    this.listadoPedidos = this.pedidosService.listadoPedidosLocalStorage;
  }

  eliminar(pedido: Pedido) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar el pedido de ${pedido.nombreCliente}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        Swal.fire({
          text: 'Se elimino correctamente',
          icon: 'success'
        });
        this.pedidosService.eliminarPedidos(pedido);
        this.obtenerPedidos();
      }
    });
  }

}
