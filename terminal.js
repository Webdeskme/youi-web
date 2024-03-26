$('body').terminal({
    ls: function() {
        this.echo('home\nabout\ngames\nplay\ndevdocs\nprivacy\nterms\ndisclaimer');
    },
    home: function() {
        window.location.href = "index.html";
    },
    about: function() {
        window.location.href = "about.html";
    },
    games: function() {
        window.location.href = "blog/output/index.html";
    },
    play: function() {
        window.location.href = "control/index.html";
    },
    privacy: function() {
        window.location.href = "privacy.html";
    },
    terms: function() {
        window.location.href = "terms.html";
    },
    disclaimer: function() {
        window.location.href = "diclamer.html";
    },
}, {
    checkArity: false,
    prompt: 'WebDesk$ ',
    greetings: 'Welcome to the WebDesk terminal. This is for quick navigation to all pages. Type "ls" for a list of commands.'
});
