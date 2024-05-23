//* Loader *//

const svg = document.getElementById("svg");
const tl = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

tl.from(".loader-wrap-heading h1", {
    delay: 1,
    y: 200,
    skewY: 10,
}).to(".loader-wrap-heading h1", {
    delay: 1.5,
    y: -200,
    skewY: 10,
});

tl.to(svg, {
    duration: 0.8,
    attr: { d: curve },
    ease: "power2.easeIn",
}).to(svg, {
    duration: 0.8,
    attr: { d: flat },
    ease: "power2.easeOut",
});

tl.to(".loader-wrap", {
    y: -1500,
});

tl.to(".loader-wrap", {
    zIndex: -1,
    display: "none",
});

tl.from(
    ".container h1",
    {
        y: 100,
        opacity: 0,
    },
    "-=1.5"
);


//* Nav *//

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .list");
const navLi = document.querySelectorAll("nav .list");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

// Optional: Smooth scrolling to anchor links
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth",
            });
        }
    });
});


//* banner*//

$(document).ready(function () {

    var animationDelay = 2500;

    animateHeadline($('.cd-headline'));

    function animateHeadline($headlines) {
        $headlines.each(function () {
            var headline = $(this);
            //trigger animation
            setTimeout(function () { hideWord(headline.find('.is-visible')) }, animationDelay);
            //other checks here ...
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
        setTimeout(function () { hideWord(nextWord) }, animationDelay);
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});


$(document).ready(function () {

    function toggleProgress() {
        const progressElement = document.querySelector('.progress');
        progressElement.classList.toggle('active');
    }

});