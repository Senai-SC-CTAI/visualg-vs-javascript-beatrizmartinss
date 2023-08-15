function calcularTroco() {
    var arroz = parseFloat(document.getElementById('arroz').value);
    var batata_palha = parseFloat(document.getElementById('batata_palha').value);
    var suco = parseFloat(document.getElementById('suco').value);
  
    var total = arroz + batata_palha + suco;
    document.getElementById('total').textContent = 'Valor total: R$ ' + total.toFixed(2);
  
    var valor_pago = parseFloat(document.getElementById('valor_pago').value);
  
    var troco = valor_pago - total;
    document.getElementById('troco').textContent = 'Troco: R$ ' + troco.toFixed(2);
  }