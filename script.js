document.getElementById("parkingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const zone = document.getElementById("zone").value;
    const vehicle = document.getElementById("vehicle").value;
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);

    const zonePrices = {
        "A": 1000,
        "B": 800,
        "C": 600
    };

    const basePrice = zonePrices[zone];

    let total = 0;

    // Teljes órák számítása
    for (let i = 0; i < hours; i++) {
        total += basePrice * Math.pow(1.1, i);
    }

    // Perc arányos díj
    if (minutes > 0) {
        const nextHourPrice = basePrice * Math.pow(1.1, hours);
        total += nextHourPrice * (minutes / 60);
    }

    total = Math.round(total);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Parkolási adatok:</h3>
        <p><strong>Zóna:</strong> ${zone}</p>
        <p><strong>Jármű típusa:</strong> ${vehicle}</p>
        <p><strong>Időtartam:</strong> ${hours} óra ${minutes} perc</p>
        <hr>
        <h2>Fizetendő összeg: ${total} Ft</h2>
    `;
});
