let total = 0;

function addItem() {
    const input = document.getElementById('itemCount');
    const display = document.getElementById('totalDisplay');
    const message = document.getElementById('message');
    
    let value = parseInt(input.value);

    if (!isNaN(value) && value >= 0) {
        total += value;
        display.innerText = total;
        input.value = ''; // مسح الخانة بعد الإضافة

        // رسالة تشجيعية
        if (total > 5) {
            message.innerText = "⚠️ استهلاكك مرتفع قليلاً، حاول استخدام بدائل مستدامة!";
            message.style.color = "orange";
        } else {
            message.innerText = "✅ عمل رائع! أنت تحافظ على البيئة.";
            message.style.color = "green";
        }
    }
}

function resetCount() {
    total = 0;
    document.getElementById('totalDisplay').innerText = total;
    document.getElementById('message').innerText = "";
}