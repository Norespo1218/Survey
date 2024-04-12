
var typing = new Typed(".text", {
  strings: ["Shortening.", "of School.", "Year - DepEd."],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true
});


gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08, 
    duration: 0.3
  });
});
