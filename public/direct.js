(function () {
    emailjs.init("YCDB3J6-MLdH3Lbea"); // Kiểm tra lại public key có đúng không.
})();

function sendMail() {
    const emailInput = document.getElementById("emailInput").value;

    if (!emailInput) {
        alert("Hãy nhập đúng định dạng mail đi nào!");
        return;
    }

    const templateParams = {
        to_email: emailInput
    };

    emailjs.send("service_hoangtung386", "template_thq8xpf", templateParams)
        .then(response => {
            console.log('Email gửi thành công!', response.status, response.text);
            window.location.href = "video.html";
        })
        .catch(error => {
            console.error('Gửi email thất bại:', error);
            alert("Không biết sao bị lỗi rùi!!!")
            window.location.href = "video.html";
        });
}
