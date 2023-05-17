$(document).ready(function() {
    let role = document.getElementById("role");
    let typewriter_role = new Typewriter(role, {
    loop: true
    });

    typewriter_role
    .typeString('개발자')
    .pauseFor(1200)
    .deleteAll()
    .typeString('디자이너')
    .pauseFor(1000)
    .deleteAll()
    .typeString('노예')
    .pauseFor(1200)
    .start();

    });

$(document).ready(function() {
    let lang = document.getElementById("lang");
    let typewriter_lang = new Typewriter(lang, {
    loop: true
    });
    
    typewriter_lang
    .typeString('Node.js를')
    .pauseFor(1200)
    .deleteAll()
    .typeString('Javascript를')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Python을')
    .pauseFor(1200)
    .start();
    
    });