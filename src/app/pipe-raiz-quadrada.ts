import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
 name : 'raizquadrada'
})
export class RaizQuadrada implements PipeTransform {
 transform(numero : number) : number {
 return Math.sqrt(numero);
 }
}
