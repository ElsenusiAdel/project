// الحصول على عناصر HTML
const purchaseButton = document.getElementById("purchaseButton");
const successPopup = document.getElementById("successPopup");
const closeButton = document.getElementById("closeButton");

// عرض النافذة المنبثقة
function showSuccessPopup() {
    successPopup.style.display = "block";
}

// إغلاق النافذة المنبثقة
function closeSuccessPopup() {
    successPopup.style.display = "none";
}

// إضافة أحداث الضغط على الزر
purchaseButton.addEventListener("click", showSuccessPopup);
closeButton.addEventListener("click", closeSuccessPopup);

// إغلاق النافذة عند النقر خارجها
window.addEventListener("click", function(event) {
    if (event.target === successPopup) {
        closeSuccessPopup();
    }
});