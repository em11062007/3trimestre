class veiculo :
    def _init_(self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano

        def ligar (self):
            print("veiculo ligado")

        def desligar(self):
            print("veiculo desligado")
        
class carro(veiculo):
    def _init_(self, marca, modelo, ano, numeroDePortas):
        super().__init__(marca, modelo, ano)
        self.numeoDePortas

class moto (veiculo):
    def _init_(self, modelo, ano, cilindradas):
        super().__init(marca, modelo, ano) # type: ignore
        self.cilindradas = cilindradas

carro1 = carro("porsche", "coegen", 2021, 5)
print(carro1.marca)
