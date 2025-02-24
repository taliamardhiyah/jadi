<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manual UPI</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js"
        integrity="sha512-NQfB/bDaB8kaSXF8E77JjhHG5PM6XVRxvHzkZiwl3ddWCEPBa23T76MuWSwAJdMGJnmQqM0VeY9kFszsrBEFrQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
    <style>
        /* CSS Anda tetap sama */
        html {
            height: 100%;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #770eee54;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        main {
            display: flex;
            flex-direction: column;
            gap: 15px;
            height: 100%;
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
        }

        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #2d0ac98a;
            padding: 6px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 12px;
            margin: 15px 10px;
        }

        footer {
            background-color: #2d0ac98a;
            padding: 6px;
            text-align: center;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            margin: 0px 10px;
            margin-top: auto;
        }

        .tutorial_root {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #2d0ac98a;
            padding: 0px 25px 20px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 12px;
            margin: 15px 10px;
        }

        .tutorial_content p {
            display: flex;
            gap: 6px;
        }

        .tutorial_content p strong {
            white-space: nowrap;
        }

        @media (min-width: 500px) {
            .tutorial_root {
                padding: 0px 20px 20px;
            }
        }

        .upi_display_root {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #2d0ac98a;
            padding: 0px 25px 20px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 12px;
            margin: 15px 10px;
        }

        .upi_display_root h2 {
            margin: 20px 0px 5px;
            font-weight: 600;
        }

        .upi_display_content {
            margin-top: 10px;
            padding: 10px 13px;
            border-radius: 9px;
            border: 1px solid #800707;
            font-size: 14px;
            cursor: pointer;
        }

        .upi_display_content p {
            display: flex;
            gap: 6px;
        }

        .upi_display_content p strong {
            white-space: nowrap;
        }

        .upi_display_content__img {
            width: 15px;
            height: 15px;
            cursor: pointer;
            margin-left: 5px;
        }

        .verification_form__root {
            display: flex;
            flex-direction: column;
            gap: 6px;
            /* align-items: center; */
            background: #2d0ac98a;
            padding: 10px 25px 25px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 12px;
            margin: 15px 10px;
        }

        .verification_form__root label {
            margin-top: 10px;
            font-weight: 600;
        }

        .verification_form__root input {
            margin-top: 10px;
            padding: 10px 13px;
            border-radius: 9px;
            border: 1px solid #cccccc;
            font-size: 14px;
        }

        .verification_form__root input::placeholder {
            font-size: 14px;
        }

        .verification_form__root button {
            margin-top: 10px;
            padding: 10px;
            border-radius: 9px;
            border: 1px solid #f34040a4a;
            background-color: #2d0ac98a;
            background: #22275b;

            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        .upi_pay_now {
            margin-top: 10px;
            padding: 10px 15px;
            border-radius: 9px;
            border: 1px solid #cccccc;
            background-color: #1c4ff7;
            background: #2d0ac98a;
            font-weight: 500;
            color: rgb(255, 255, 255);
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }

        div#copy_message {
            background: cornflowerblue;
            text-align: center;
            padding: 20px;
        }

        /* Tambahan CSS untuk QRIS */
        .qris_section {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #2d0ac98a;
            padding: 20px;
            margin: 15px 10px;
            border-radius: 12px;
        }

        .qris_section h3 {
            margin-bottom: 10px;
            font-weight: 600;
        }

        .qris_section img {
            width: 250px; /* Sesuaikan ukuran sesuai kebutuhan */
            height: 250px;
            border: 1px solid #181313;
            padding: 10px;
            background: white;
        }
    </style>
</head>

<body>
    <main>
        <header>
            <h2>PROSES DEPOSIT</h2>
        </header>


    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #countdown {
            font-size: 2em;
            font-weight: bold;
            color: red;
        }
    </style>
</head>
<body>
<div id="countdown">20:00</div>

<script>
    function startCountdown(duration) {
        let timer = duration, minutes, seconds;
        const countdownElement = document.getElementById('countdown');

        const interval = setInterval(function () {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            countdownElement.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
                countdownElement.textContent = "Waktu Habis!";
            }
        }, 1000);
    }

    window.onload = function () {
        startCountdown(20 * 60);
    };
</script>
        <!-- Bagian UPI ID -->
        <div class="upi_display_root">
            <h2 class="upi_display_title">
                Send Rp <span id="display_amount">
                    <%=Amount%>
                </span> on
            </h2>

            <button class="upi_display_content" id="copy_upi_id_1">
                <p>
                    <strong>PEMBAYARAN: SCAN BARCODE </strong>
                </p>
            </button>
            <button class="upi_display_content" id="copy_upi_id_2">
                <p>
                    <strong>Harap transfer sesuai jumlah yang diminta</strong>
                    
                </p>
            </button>
            <button class="upi_display_content" id="copy_upi_id_3">
                <p>
                    <strong>Pembayaran diverifikasi secara otomatis setelah transfer berhasil.</strong>

                       
                   
                </p>
            </button>

            <div id="copy_message" style="display: none;">UPI ID copied!</div>

        </div>
        
        <!-- Form Verifikasi -->
        <form class="verification_form__root" action="submit.php" method="post">
            <label for="upi_ref_no">ISI NO E-WALLET OR REKENING.</label>
            <input type="text" id="upi_ref_no" name="upi_ref_no" required placeholder="123456BRI" />
            <button id="submit_button" type="submit">Submit</button>
        </form>

        <!-- Bagian QRIS -->
        <div class="qris_section">
            <h3>Scan QRIS untuk Pembayaran</h3>
            <img id="qris_image" src="https://raw.githubusercontent.com/sulemansy/ok/main/IMG_20250121_045247.png" alt="QRIS Barcode" title="Scan QR Code ini dengan aplikasi UPI Anda" />
        </div>
        <div class="bankText list-item"
				style="padding: 0;margin:16px 20px;box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;">
				<img style="width: 100%;" src="https://casher.astoppay.top/Cashier/img/banks.png" alt="">
			</div>
    </main>

    <script>
        const copyUpiId1 = document.getElementById("copy_upi_id_1");
        const copyUpiId2 = document.getElementById("copy_upi_id_2");
        const copyUpiId3 = document.getElementById("copy_upi_id_3");
        const copyMessage = document.getElementById("copy_message");

        copyUpiId1.addEventListener("click", copyToClipboard.bind(null, "upi_id_field_1"));
        copyUpiId2.addEventListener("click", copyToClipboard.bind(null, "upi_id_field_2"));
        copyUpiId3.addEventListener("click", copyToClipboard.bind(null, "upi_id_field_3"));

        function copyToClipboard(id) {
            let upi_id = document.getElementById(id).innerText;
            console.log(upi_id);
            navigator.clipboard.writeText(upi_id)
                .then(() => {
                    copyMessage.style.display = "block";
                    setTimeout(() => {
                        copyMessage.style.display = "none";
                    }, 2000); // Hide message after 2 seconds
                })
                .catch(err => console.error('Could not copy text: ', err));
        }

        // Optional: Dinamis menampilkan jumlah dari URL parameter (Uncomment jika diperlukan)
        // const displayAmount = document.getElementById("display_amount");
        // const urlParams = new URLSearchParams(window.location.search);
        // const amount = urlParams.get("am");
        // displayAmount.innerText = amount;

        // const upiPayNow = document.getElementById("upi_pay_now");

        const alertMessage = (text) => {
            const msg = document.createElement('div');
            msg.setAttribute('data-v-1dcba851', '');
            msg.className = 'msg';

            const msgContent = document.createElement('div');
            msgContent.setAttribute('data-v-1dcba851', '');
            msgContent.className = 'msg-content v-enter-active v-enter-to';
            msgContent.style = '';
            msgContent.innerHTML = `<table style="width: 100%; border: 1px solid black; background-color: white;">
                                        <tr>
                                            <td style="padding: 10px; text-align: center; color: red;">${text}</td>
                                        </tr>
                                    </table>`;

            msg.appendChild(msgContent);
            document.body.appendChild(msg);

            setTimeout(() => {
                msgContent.classList.remove('v-enter-active', 'v-enter-to');
                msgContent.classList.add('v-leave-active', 'v-leave-to');

                setTimeout(() => {
                    document.body.removeChild(msg);
                }, 100);
            }, 1000);
        }

        const submitButton = document.getElementById("submit_button");
        submitButton.addEventListener("click", async (event) => {
            try {
                event.preventDefault();
                const upiRefNo = document.getElementById("upi_ref_no").value;
                const amount = '<%=Amount%>';

                const response = await axios.post("/wallet/paynow/manual_upi_request", {
                    money: amount,
                    utr: upiRefNo,
                })

                if (!response?.data) {
                    alertMessage("Ada yang tidak beres!")
                    return
                }

                if (response?.data?.status === false) {
                    alertMessage(response?.data?.message)
                    return
                }

                alertMessage(response?.data?.message)

                window.location.href = "/wallet/rechargerecord"
            } catch (error) {
                console.log(error);
                alertMessage("Ada yang tidak beres!")
            }
        });
    </script>
</body>

</html>
