function angkaPrima(angka) {
  var prima = true
  for (var i = 2; i < angka; i++){
    var hasil = angka % i
    if(hasil == 0){
      break;
    }
  }
  // console.log(hasil)

  if (hasil != 0){
    return true
  }
  else if( hasil == 0){
    return false
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
