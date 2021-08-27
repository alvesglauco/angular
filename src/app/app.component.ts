import {  Component, AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit ,
   DoCheck, OnChanges, OnDestroy, OnInit, Input, SimpleChanges } from '@angular/core';
   import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy{
  title = 'angular-first';

  /*aqui, vamos implementar os codigos*/
  public x:number = 10;
  public umArray: Array<number> = [56,23,58]
  public dataHoje: Date = new Date()
  public statusBooleano: boolean = true
  public nome: string = '';
  public texto: string = 'Este é o texto da caixa de dialogo alert 12121';
  exibir!: boolean;

  subtitulo: string = "5 filmes sensacionais!";
  filmes: Filme[] =[
  {titulo:'O poderoso Chefão',direcao:'Francis Ford Coppola',elenco:'Marlon Brando, Al Pacino, James Caan',anoLancamento:'10 de setembro, 1972'},
  {titulo:'Um Estranho no Ninho',direcao:'Milos Forman',elenco:'Jack Nicholson, Louise Fletcher, Michael Berryman ',anoLancamento:'26 de maio, 1976'},
  {titulo:'A lista de Schindler',direcao:'Steven Spielberg',elenco:'Liam Neeson, Ralph Fiennes, Ben Kingsley',anoLancamento:'11 de março, 1993'},
  {titulo:'Forrest Gump - O contador de histórias',direcao:'Robert Zemeckis',elenco:'Tom Hanks, Robin Wright, Gary Sin ise',anoLancamento:'7 de dezembro, 1994'},
  {titulo:'Laranja Mecânica',direcao:'Stanley Kubrik',elenco:'Malcolm McDowell, Patrick Magee, Michael Bates ',anoLancamento:'04 de setembro, 1971'}
 ]

 cssAlteradoViaVar: string= 'color size';
 umaClasseCss: UmaClasseCss = new UmaClasseCss();

  public exibirTexto(): string{
    return 'Texto digitado'
  }

  email:any;
  formdata:any;

  enviarDados(data:any) {this.email = data.email;}

  public exibirAlerta(): void {
    console.log('Evento Disparado...');
    alert('Evento disparado...');
    }

    public exibirDados(data:any): void {
    let strMessage: string = 'Obrigado por se cadastrar ' +  data.nome + ".";
     strMessage += ' O email ' + data.email + ' foi cadastrado com sucesso.';
     alert(strMessage);
     }

     tamanho: number = 12;
 color: string= '#380F6C';
 estiloClasse: EstiloClasse = new EstiloClasse();

 exibirFilho: boolean=false

 constructor() {
  console.log("AppComponent:Constructor");
  }
  toggle() {
  this.exibirFilho =! this.exibirFilho;
  }
  ngOnChanges() {
  console.log("AppComponent:OnChanges");
  }
  ngOnInit() {
  console.log("AppComponent:OnInit");
  this.formdata = new FormGroup({
    email: new FormControl("agular@mail.com"),
    senha: new FormControl("#$@%")
    });
  }
  ngDoCheck() {
  console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");
    }
    ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
    }
    ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
    }
    ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
    }
    ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
    }

    umJson = {nome:'Dexter', idade:'8', endereco:{rua:'Rua da Casinha', numero:'01'}};
    mesesAno = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Ago', 'Set', 'Out', 'Nov', 'Dez'];

  /*aqui, vamos implementar os codigos*/
}

class EstiloClasse {
  color: string= '#FF5733';
  'font-size.%': number= 150;
  'font-weight': string= 'bold';
 }
class Filme {
  titulo!: string;
  direcao!: string;
  elenco!: string;
  anoLancamento!: string;
 }

 // criando uma nova classe fora da classe principal
class UmaClasseCss {
  color: boolean= true;
  size: boolean= true;
 }
/*aqui, vamos guardar os codigos*/
