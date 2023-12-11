document.addEventListener("DOMContentLoaded", function() {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    const downloadButton = document.querySelector('.download-button');
    const downloadContainer = document.querySelector('.download-container');
    const qrCode = document.getElementById('qrcode');

    if (isMobile) {
        // Verificar si downloadButton existe antes de modificar su estilo
        if (downloadButton) {
            downloadContainer.style.display = 'flex';
            downloadContainer.style.justifyContent = 'center';
            downloadContainer.style.alignItems = 'center';
            downloadContainer.style.flexDirection = 'column';

            downloadButton.style.display = 'flex';
            downloadButton.style.flexDirection = 'column';
            downloadButton.style.justifyContent = 'center';
            downloadButton.style.alignItems = 'center';

        }
    } else {
        // Generar y mostrar código QR para PC
        if (qrCode) {
            new QRCode(qrCode, {
                text: 'https://www.dropbox.com/scl/fi/ump4gyb1j6aym4l06mj93/DuocTAP.apk?rlkey=aijfjtmx1oewpk7os7m9lcbyk&dl=0',
                width: 300,
                height: 300,
                colorDark: "#012C56",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            qrCode.style.display = 'flex';
            qrCode.style.justifyContent = 'center';
            qrCode.style.alignItems = 'center';
            qrCode.style.flexDirection = 'column';
        }
    }
});