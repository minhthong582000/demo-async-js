function xin_tien_bo_me() {
    console.log("Bo me cho tien !");

    let tien = 30000000000; // VND

    return new Promise((resolve, reject) => {
        setTimeout(resolve(tien), 1000);
    })
}

function mua_xe(tien) {
    if (tien < 10000000000000000000) {
        throw new Error("Khong du tien !");
    }

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

async function toi_hom_nay() {
    try {
        const tien = await xin_tien_bo_me();
        const xe = await mua_xe(tien);
        const gai = await cho_gai_di_choi(xe);
        await cho_gai_ve();
    } catch(error) {
        console.log(error);
    }
}

toi_hom_nay();




