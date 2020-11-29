// Gia su cac ham sau day bat dong bo, cac ban KHONG the viet nhu sau

// const tien = xin_tien_bo_me();
// const xe  = mua_xe(tien);
// const gai = cho_gai_di_choi(xe);
// cho_gai_ve(gai);

function xin_tien_bo_me() {
    console.log("Bo me cho tien !");

    let tien = 30000000000; // VND

    return new Promise((resolve, reject) => {
        setTimeout(resolve(tien), 1000);
    })
}

function mua_xe(tien) {
    // if (tien < 10000000000000000000) {
    //     throw new Error("Khong du tien mua xe!");
    // }

    console.log("da mua xe voi gia " + tien + " VND");

    let xe = 'rolls royce';

    return new Promise((resolve, reject) => {
        setTimeout(resolve(xe), 1000);
    })
}

function cho_gai_di_choi(xe) {
    console.log("Cho gai di choi bang xe " + xe);

    return new Promise((resolve, reject) => {
        setTimeout(resolve(), 1000);
    })
}

function cho_gai_ve() {
    console.log("cho gai ve nha nghi");
}

xin_tien_bo_me()
    .then(mua_xe)
    .then(cho_gai_di_choi)
    .then(cho_gai_ve)
    .catch((err) => {
        console.log(err)
    })

