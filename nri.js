// mobile menu icon

const menu = document.querySelector (".navbar_toggle")
const menuLinks = document.querySelector (".navbar_menu")

menu.addEventListener ("click", ()=>{
    menu.classList.toggle ("active");
    menuLinks.classList.toggle ("is-active");
})

// Region options

const region = document.querySelector (".region_container")
const optionContainer = document.querySelector (".option_container")
const options = document.querySelectorAll (".option")
const selected = document.querySelector (".selected")
const regionDropdown = document.querySelector (".region_dropdown")

region.addEventListener ("click", ()=>{
    optionContainer.classList.toggle ("active");
    regionDropdown.classList.toggle ("active");
})

options.forEach(option =>{
    option.addEventListener ("click", ()=>{
        selected.innerHTML = option.querySelector ("label").innerHTML;
        optionContainer.classList.remove ("active");
    })
})


// unHide Password

const passwordField = document.querySelectorAll (".pwfield")
const unHide = document.querySelectorAll (".unHide")

unHide.forEach(unHide =>{
    unHide.addEventListener ("click", ()=>{
        passwordField.forEach(pwfield =>{
            if(pwfield.type === "password") {
                pwfield.type = "text";

                unHide.classList.replace ("bi-eye-slash", "bi-eye");
            }else {
                pwfield.type = "password";
                unHide.classList.replace ("bi-eye", "bi-eye-slash")
            }
        })
        
    })
})


// Login-regist

const loginRegist = document.querySelectorAll (".login-regist")
const forms = document.querySelectorAll (".forms")
const signUp = document.querySelectorAll (".sign-up")
const signIn = document.querySelectorAll (".sign-in")

signUp.forEach(signUp =>{
    signUp.addEventListener ("click", ()=>{
        loginRegist.forEach(loginRegist =>{
            loginRegist.classList.add ("active");
        })
    })
})

signIn.forEach(signIn =>{
    signIn.addEventListener ("click", ()=>{
        loginRegist.forEach(loginRegist =>{
            loginRegist.classList.remove ("active");
        })
    })
})


// mobile sign-in

const mobileSignIn = document.querySelector (".mobile_signIn")
const taglineContainer = document.querySelector (".tagline_container")
const loginRegistContainer = document.querySelector (".login-regist_container")
const cancelButton = document.querySelectorAll (".cancel_btn")

mobileSignIn.addEventListener ("click", ()=>{
    taglineContainer.classList.add ("active");
    loginRegistContainer.classList.add ("active");
})

cancelButton.forEach(cancel =>{
    cancel.addEventListener ("click",()=>{
        taglineContainer.classList.remove ("active");
        loginRegistContainer.classList.remove ("active");
    })

})


// Navbar Callback

const nav = document.querySelector (".navbar")
const header = document.querySelector (".slider")

function navCallback(entries){
    nav.classList.toggle ("active", !entries[0].isIntersecting)
}
const navOptions = {
    threshold: 0.3
}


const navObs = new IntersectionObserver (navCallback, navOptions)

navObs.observe(header)



// Hero Slider

let counter = 1
setInterval(function(){
    document.getElementById ("radio" + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);


// Fade Observer

const fadeUp = document.querySelectorAll (".fade-up")
const fadeLeft = document.querySelectorAll (".fade-left")
const fadeRight = document.querySelectorAll (".fade-right")
const fadeUpFast = document.querySelectorAll (".fade-up-fast")
const fadeUpSlow = document.querySelectorAll (".fade-up-slow")
const fadeLeftSlow = document.querySelectorAll (".fade-left-slow")
const fadeRightSlow = document.querySelectorAll (".fade-right-slow")

const fadeUpObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeUpObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0
})

fadeUp.forEach(fadeUp =>{
    fadeUpObs.observe(fadeUp);
})

const fadeUpFastObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeUpFastObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0
})

fadeUpFast.forEach(fadeUpFast =>{
    fadeUpFastObs.observe(fadeUpFast)
})

const fadeUpSlowObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeUpSlowObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0
})

fadeUpSlow.forEach(fadeUpSlow =>{
    fadeUpSlowObs.observe(fadeUpSlow)
})



const fadeLeftObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeLeftObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeLeft.forEach(fadeLeft =>{
    fadeLeftObs.observe(fadeLeft);
})


const fadeLeftSlowObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeLeftSlowObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeLeftSlow.forEach(fadeLeftSlow =>{
    fadeLeftSlowObs.observe(fadeLeftSlow);
})



const fadeRightObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeRightObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeRight.forEach(fadeRight =>{
    fadeRightObs.observe(fadeRight)
})


const fadeRightSlowObs = new IntersectionObserver ((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("faded");
            fadeRightSlowObs.unobserve(entry.target)
        }
    })
}, {
    threshold: 0.5
})

fadeRightSlow.forEach(fadeRightSlow =>{
    fadeRightSlowObs.observe(fadeRightSlow)
})