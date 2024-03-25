$('body').terminal({
    /*cat: function(width = 200, height = 300) {
        return $(`<img src="https://placekitten.com/${width}/${height}">`);
    },
    title: function() {
        return fetch('https://terminal.jcubic.pl')
            .then(r => r.text())
            .then(html => html.match(/<title>([^>]+)<\/title>/)[1]);
    },*/
    ls: function() {
        this.echo('about\ngames\nplaygames\nplaymovie\ndevdocs\nprivacy\nterms\ndisclaimer');
    },
    about: function() {
        window.location.href = "about.html";
    },
    games: function() {
        window.location.href = "blog/output/index.html";
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
