import { Component, EventEmitter, Input, Output } from '@angular/core';
import NewReserve from 'src/app/models/newReserve';
import Voo from 'src/app/models/voo';
import { AlertService } from 'src/app/services/alert.service';
import { ViagensService } from 'src/app/services/viagens.service';

@Component({
  selector: 'app-modal-viagem',
  templateUrl: './modal-viagem.component.html',
  styleUrls: ['./modal-viagem.component.css']
})
export class ModalViagemComponent {

  constructor(private alert: AlertService, private viagensService: ViagensService) { }

  @Input() show = false
  @Input() voo = new Voo
  @Output() closeModal = new EventEmitter<any>();
  @Output() getUserVoos = new EventEmitter<any>();
  reservedSeats: any = []
  cadeiraEscolhida: any

  @Input() set seats(seats: any) {
    var canvas: any = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ngOnInit()

    this.reservedSeats = seats
    const iCoords = [7.5, 52.5, 157.5, 202.5]
    const jCoords = [17.5, 87.5, 157.5, 227.5, 297.5]
    
    var image = new Image();
    image.src = "../../../assets/imgs/reservada.png";
    image.onload = function () {
      for (let i of seats) {
        ctx.drawImage(this, iCoords[i.i], jCoords[i.j], 40, 40);
      }
    }
  }


  ngOnInit() {
    const iCoords = [7.5, 52.5, 157.5, 202.5]
    const jCoords = [17.5, 87.5, 157.5, 227.5, 297.5]
    const cadeiras: any = []
    var canvas: any = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#64546C";
    ctx.strokeRect(0, 0, 250, 350);

    var image = new Image();
    image.src = "../../../assets/imgs/cadeira.png";
    image.onload = function () {
      for (let j = 0; j < jCoords.length; j++) {
        cadeiras.push([])
        for (let i = 0; i < iCoords.length; i++) {
          ctx.drawImage(this, iCoords[i], jCoords[j], 40, 40);
          cadeiras[j].push({ i, j })
        }
      }
    };

    canvas.addEventListener("click", (event: any) => {
      var clickX = event.pageX - canvas.offsetLeft;
      var clickY = event.pageY - canvas.offsetTop;
      let cadeira
      let validClick = true
      for (let j = 0; j < jCoords.length; j++) {
        for (let i = 0; i < iCoords.length; i++) {

          if (clickX >= iCoords[i] && clickX <= iCoords[i] + 40 &&
            clickY >= jCoords[j] && clickY <= jCoords[j] + 40) {

            for (let r of this.reservedSeats) {
              if (r.i == i && r.j == j) {
                validClick = false
                this.alert.info('Cadeira indisponível', 'Ops...')
                break
              }
            }

            if (this.cadeiraEscolhida?.i == i && this.cadeiraEscolhida?.j == j) validClick = false

            cadeira = { i, j }
            if (!validClick) break
            var image = new Image();
            image.src = "../../../assets/imgs/livre.png";
            image.onload = function () {
              ctx.drawImage(this, iCoords[i], jCoords[j], 40, 40);
            }
            break
          }
        }
        if (cadeira) break
      }

      if (this.cadeiraEscolhida?.i != undefined && this.cadeiraEscolhida?.j != undefined && validClick) {
        var image = new Image();
        image.src = "../../../assets/imgs/cadeira.png";
        let i = this.cadeiraEscolhida.i
        let j = this.cadeiraEscolhida.j
        image.onload = function () {
          ctx.drawImage(this, iCoords[i], jCoords[j], 40, 40);
        }
      }

      if (validClick) this.cadeiraEscolhida = cadeira
      console.log(this.cadeiraEscolhida)
    });
  }

  confirm() {
    if (!this.cadeiraEscolhida) {
      this.alert.info('Escolha sua cadeira!')
    } else {
      const userJson: any = window.localStorage.getItem('user')
      const user = JSON.parse(userJson)

      const newReserv = new NewReserve
      newReserv.voo = this.voo.id
      newReserv.i = this.cadeiraEscolhida.i
      newReserv.j = this.cadeiraEscolhida.j
      newReserv.user = user.id

      this.viagensService.newReserve(newReserv).subscribe(result => {
        this.close()
        this.getUserVoos.emit()
        this.alert.success('Reserva feita com sucesso')
      })
    }
  }

  close() {
    this.show = false
    this.voo = new Voo
    this.reservedSeats = []
    this.cadeiraEscolhida = undefined
    this.closeModal.emit()
  }
}
