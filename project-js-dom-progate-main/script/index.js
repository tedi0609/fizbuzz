const tombol = document.querySelector('button');

// ketika button diklick akan menjalankan perintah berikut
tombol.addEventListener('click', function () {
  const nomor = document.getElementById('number');
  const result = document.createElement('p');

  //kode kondisi untuk perhitungan dan hasilnya
  if ((nomor.value % 3 === 0 && nomor.value === 'undefined') || nomor.value === '') {
    result.innerHTML = 'Invalid Input';
  } else {
    //jika input pada kondisi awal tidak terjadi maka
    if (nomor.value % 3 == 0 && nomor.value % 5 == 0) {
      result.innerHTML = 'FizzBuzz';
    } else if (nomor.value % 3 == 0) {
      result.innerHTML = 'Fizz';
    } else if (nomor.value % 5 == 0) {
      result.innerHTML = 'Buzz';
    } else {
      result.innerHTML = nomor.value;
    }
  }
  document.getElementById('result').append(result);
});
