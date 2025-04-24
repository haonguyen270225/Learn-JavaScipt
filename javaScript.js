function myFunction() {
  document.getElementById("demo").innerHTML = 'Hello JavaScript!';
}

function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
      }
      return true;
    }

function Sang_So_NGuyen_To() {
    let n = laySo();
    let result = "";
    for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
        result += i + " ";
    }
    }
    document.getElementById("demo01").innerHTML = "Kết quả: " + result;
}

function laySo() {
  let n = parseInt(document.getElementById("soNguyen").value);
  document.getElementById("ketQua").innerHTML = "Bạn đã nhập: " + n;
    document.getElementById("demo02").innerHTML = "Liet ke cac so nguyen to tu 1 den " + n;
  return n;
}