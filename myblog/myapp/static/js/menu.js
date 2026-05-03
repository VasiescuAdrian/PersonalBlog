document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('main-nav');
    
   
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.sticky-nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            nav.style.backgroundColor = '#2c3e50';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
});


const hasSubmenu = document.querySelectorAll('.has-submenu');
hasSubmenu.forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth > 768) {
            e.preventDefault();
            this.querySelector('.submenu').classList.toggle('active');
        }
    });
});



const themeToggle = document.createElement('div');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
document.querySelector('.nav-container').appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('fa-moon');
    this.querySelector('i').classList.toggle('fa-sun');
});
