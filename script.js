// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // activate section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }

    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// send email to myshelf
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail()  {
    const body = `Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Phone:  ${phone.value}<br> ${message.value}`;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mitsosdemos@gmail.com",
        Password : "7D388B2951D9A0532247BFFB67792EF15944",
        To : 'mitsosdemos@gmail.com',
        From : "mitsosdemos@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent succesfully!",
                incon: "success"
            });
        }
      }
    );

}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});



