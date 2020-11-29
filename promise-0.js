function di_choi(tam_trang) {
  return new Promise((thuc_hien_loi_hua, that_hua) => {
    if (tam_trang === "vui") {
      thuc_hien_loi_hua("Di choi !");
    } else {
      that_hua("Deo di !");
    }
  });
}
  
let promise = di_choi("buon"); 

promise
  .then((ket_qua) => {
    console.log(ket_qua);
  })
  .catch((ket_qua) => {
    console.log(ket_qua);
  });
