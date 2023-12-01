function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

var quotes = [
    ["It is never too late to be what you might have been.","George Eliot"],
    ["Don't let your happiness depend on something you may lose.","C.S. Lewis"],
    ["Life isn't about finding yourself. Life is about creating yourself.","George Bernard Shaw"],
    ["We live in a rainbow of chaos.","Paul Cezanne"],
    ["Be yourself and people will like you.","Jeff Kinney"],
    ["Spread love everywhere you go."," Mother Teresa"],
    ["To succeed in life, you need two things: ignorance and confidence","Mark Twain"],
    ["The roots of education are bitter, but the fruit is sweet.","Aristotle"],
    ["The moment you doubt whether you can fly, you cease forever to be able to do it."," J.M. Barrie"],
    ["The worst enemy to creativity is self-doubt","Sylvia Plath"],
    ["You can always edit a bad page. You can't edit a blank page.","Jodi Picoult"],
    ["Change the game, don’t let the game change you.","Macklemore"],
    ["Every moment is a fresh beginning."," T.S.Eliot "],
    ["No pressure, no diamonds.","Thomas Carlyle"],
    ["You can’t depend on your eyes when your imagination is out of focus.","Mark Twain"],
    ["You cannot find peace by avoiding life","Charles Baudelaire"],
    ["Even the darkest night will end and the sun will rise.","Victor Hugo"],
    ["Life is really simple, but we insist on making it complicated.","Confucius"],
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["Failing to attempt is biggest failure of life.","Invajy"],
    ["Never regret anything that made you smile.","Mark Twain"],
    ["Be yourself; everyone else is already taken.","Oscar Wilde"],
    ["If you’re going through hell, keep going.","Winston Churchill"],
    ["Nothing is impossible. The word itself says “I’m possible!","Audrey Hepburn"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
    ["Everything has beauty, but not everyone sees it.","Confucius"],
    ["There is no way to happiness – happiness is the way.","Thich Nhat Hanh"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
    ["Whatever you are, be a good one."," Abraham Lincoln"],
    ["Simplicity is the ultimate sophistication."," Leonardo da Vinci"],
	["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"],
    ["You do not find the happy life. You make it.","Camilla Eyring Kimball"],
    ["Time moves in one direction, memory in another.","William Gibson"],
    ["If I cannot do great things, I can do small things in a great way.","Martin Luther King Jr."],
	["It is our choices, Harry, that show what we truly are, far more than our abilities."],
    ["Life is 10% what happens to you and 90% how you react to it.","Charles R. Swindoll"],
    ["What we think, we become.","Buddha"],
	["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
    ["If you can dream it, you can do it.","Walt Disney"],
    ["Problems are not stop signs, they are guidelines.","Robert H. Schiuller"],
    ["If opportunity doesn’t knock, build a door","Milton Berle"],
    ["The road to success is always under construction.","Lily Tomlin"],
	["Trust yourself. You know more than you think you do.","Benjamin Spock"],
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.","Albert Einstein"],
	["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
    ["Doubt kills more dreams than failure ever will","Suzy Kassem"],
    ["Don’t cry because it’s over. Smile because it happened.","Dr.Seuss"],
	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
	["Rule your mind or it will rule you.","Horace"],
    ["Achievements of today are the stepping stones for the future ones.","Invajy"],
    ["Don’t quit. Suffer now and live the rest of your life as a champion.","Muhammad Ali"],
    
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});
