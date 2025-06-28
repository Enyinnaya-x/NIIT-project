const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up, .auto-show').forEach(el => {
    observer.observe(el);
});

const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { // Show after scrolling 200px
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});



var all = []
submit = () => {
    let userName = document.querySelector('#user-name').value
    let userEmail = document.querySelector('#user-email').value
    let userComplaint = document.querySelector('#text').value
    let save = document.querySelector('#save')

    all.push(userName, userEmail, userEmail)
    
    
    
    document.querySelector('#user-name').value = ''
    document.querySelector('#user-email').value = ''
    document.querySelector('#text').value = ''

    // window.alert('Your message has been submitted, Thank you for your Feedback')
}

document.querySelector('#user-btn').addEventListener('click', submit)