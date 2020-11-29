// Gia su cac ham sau day bat dong bo, cac ban KHONG the viet nhu sau

// const tien = xin_tien_bo_me();
// const xe  = mua_xe(tien);
// const gai = cho_gai_di_choi(xe);
// cho_gai_ve(gai);

function xin_tien_bo_me(callback) {
    console.log("Bo me cho tien !");

    let tien = 30000000000; // VND

    callback(tien);
}

function mua_xe(tien, callback) {
    console.log("da mua xe voi gia " + tien + " VND");

    let xe = 'rolls royce';

    callback(xe);
}

function cho_gai_di_choi(xe, callback) {
    console.log("Cho gai di choi bang xe " + xe);

    callback();
}

function cho_gai_ve() {
    console.log("cho gai ve nha nghi");
}


xin_tien_bo_me(function (tien) {
    mua_xe(tien, function (xe) {
        cho_gai_di_choi(xe, function () {
            cho_gai_ve()
        })
    })
})