import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})

export class PedidosComponent implements OnInit {

  constructor(public pedidoServices: PedidosService) { }

  ngOnInit(): void {
    // let pedido: Pedido = new Pedido();
    // pedido.pedidoID = 1;
    // pedido.clienteID = 1;
    // pedido.nombreCliente = 'Juan';
    // pedido.total = 1500;
    // pedido.pedidoDetalle.push({
    //   productoID: 1,
    //   nombreProducto: 'Maiz',
    //   cantidad: 5,
    //   precio: 15,
    //   total: 75
    // },
    // {
    //   productoID: 2,
    //   nombreProducto: 'Coca-cola',
    //   cantidad: 2,
    //   precio: 15,
    //   total: 30
    // })
    // console.log(pedido);
  }

  calcularTotal(posicion: number) {
    // this.pedidoServices.pedido.pedidoDetalle[posicion].total = 
    // this.pedidoServices.pedido.pedidoDetalle[posicion].cantidad * 
    // this.pedidoServices.pedido.pedidoDetalle[posicion].precio
    this.pedidoServices.pedido.actualizarCantidades(posicion);
    this.pedidoServices.guardarLocalStorage();
  }

  guardar() {
    this.pedidoServices.guardarPedido();
  }

  
  eliminar(posicion: number) {
    this.pedidoServices.pedido.pedidoDetalle.splice(posicion, 1);
    this.pedidoServices.guardarLocalStorage();
  }

}
