const endDate = new Date("December 30, 2026 23:59:59").getTime();

function capNhatDongHoDemNguoc(){
    const now = new Date().getTime();
    const distance = endDate - now;

    // nếu hết thời gian
    if (distance <= 0) {
        clearInterval(timer);
        document.querySelector(".dong-ho-dem-nguoc").innerHTML =
            "<h2>⋆˙⟡ chúc cậu sinh nhật vui vẻ! .✦ ݁˖</h2>";
        return;
    }

    // tính sàn ngày, giờ, phút, giây
    const ngay = Math.floor(distance / (1000*60*60*24));

    const gio = Math.floor(
        (distance % (1000*60*60*24)) / (1000*60*60)
    );

    const phut = Math.floor(
        (distance % (1000*60*60)) / (1000*60)
    );

    const giay = Math.floor(
        (distance % (1000*60)) / 1000
    )

    // hiển thị lên HTML
    document.getElementById("ngay").textContent = ngay;
    document.getElementById("gio").textContent = gio;
    document.getElementById("phut").textContent = phut;
    document.getElementById("giay").textContent = giay;
}

capNhatDongHoDemNguoc();

const timer = setInterval(capNhatDongHoDemNguoc, 1000);