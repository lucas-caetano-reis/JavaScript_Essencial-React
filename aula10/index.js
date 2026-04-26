class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  //Método de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocarPilha() {
    console.log("Ok, vou trocar");
  }
}

function teste() {
  console.log("Este é o meu teste...");
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
ControleRemoto.trocarPilha();

const controle2 = new ControleRemoto("Samsumg");
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.diminuirVolume();

console.log(controle2);
ControleRemoto.trocarPilha();
