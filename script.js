document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // ฟังก์ชันสำหรับไฮไลต์เมนูตามการเลื่อนหน้าจอ
    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        // ตรวจสอบว่ามี navLinks[index] หรือไม่ก่อนจะ add class
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // เรียกใช้ฟังก์ชันเมื่อเริ่มและเมื่อมีการเลื่อน
    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    // ฟังก์ชันสำหรับ Smooth Scroll (ทำงานเสริมกับ CSS)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
