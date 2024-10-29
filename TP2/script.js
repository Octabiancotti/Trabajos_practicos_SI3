class Contador {
  static totalContado  = 0;

  constructor(nombreResponsable) {
    this.valor = 0;
    this.nombreResponsable= nombreResponsable;

    
  }
  
  contar() {
    this.valor+= 1;
    Contador.totalContado += 1;
  }

  
  cuentaIndividual(){
    return this.valor;
  }



  obtenerResponsable() {

    return this.nombreResponsable;
  }

  static obtenerCuentaGlobal(){

    return Contador.totalContado;
  }

  

}


const contadorJuan  = new Contador('Juan');
const contadorAna  = new Contador('Ana');

contadorAna.contar()
contadorAna.contar()
contadorAna.contar()
contadorJuan.contar()


console.log(`Responsable: ${contadorJuan.obtenerResponsable()}, valor: ${contadorJuan.cuentaIndividual()}`);
console.log(`Responsable: ${contadorAna.obtenerResponsable()}, valor: ${contadorAna.cuentaIndividual()}`);
console.log(`cuenta global: ${Contador.obtenerCuentaGlobal()}`);





