import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Output() mostrarDados = new EventEmitter<any>();
  public data:any = {};
  // VAMOS CRIAR OS ELEMENTOS PARA FAZER USO DA PROPRIEDAD @INPUT
  @Input() public mensagem: string = '';
  @Input('alerta') public outraMensagem: string = '';
  public enviarDados(): void{
    this.mostrarDados.emit(this.data);
    }

 public exibirAlerta(): void{
  alert(this.outraMensagem);
  }

 }
