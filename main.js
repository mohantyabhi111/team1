const scrollHeader = () => {
const header = document.getElementById('header')
this.scrollY >= 50 ? header.classList.add('scroll-header')
                   :header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () =>{
const scrollUp=document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections=document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach (current =>{
            const sectionHeight = current.offsetHeight,
            sectionTop= current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
           sectionsClass=document.querySelector('.menu a[href*=' + sectionId + ']')
if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
sectionsClass.classList.add('active-link')
}else{
sectionsClass.classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive)

const sr=ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true
})
sr.reveal(`.home_data,.about_data, .steps_content,.footer_container`)
sr.reveal(`.home_img`, {origin: 'bottom'})
sr.reveal(`.about_card`,{interval: 100})
sr.reveal(`.services_img,.testimonals_img`, {origin: 'right'})
sr.reveal(`.services_data,.testimonals_data`, {origin: 'left'})