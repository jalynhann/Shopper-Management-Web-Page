document.getElementById('shopperForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    const address = document.getElementById('address').value.trim();

    let errors = [];

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Please enter a valid email.");
    }
    if (!name) {
        errors.push("Name is required.");
    }
    if (phone && !/^\+?\d{7,15}$/.test(phone)) {
        errors.push("Phone number must be digits (7-15 digits).");
    }
    if (!age || age <= 0) {
        errors.push("Please enter a valid age greater than 0.");
    }
    if (!address) {
        errors.push("Address is required.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    const shopperData = {
        email: email,
        name: name,
        phone: phone || null,
        age: age,
        address: address
    };

    console.log("Shopper Data:", shopperData);
    document.getElementById('jsonOutput').textContent = JSON.stringify(shopperData, null, 2);
});
