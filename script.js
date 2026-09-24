// تشغيل تفاعلي مبدئي للصفحة والتأكد من ملاءمتها للأجهزة المحمولة
document.addEventListener('DOMContentLoaded', () => {
console.log("Rwad Bio Mobile Page Initialized.");
// تفاعل ناعم للأزرار عند الضغط
const links = document.querySelectorAll('.custom-link-btn');
links.forEach(link => {
link.addEventListener('click', (e) => {
// يمكن إضافة تأثيرات تتبع الضغطات لاحقاً هنا
});
});
});

