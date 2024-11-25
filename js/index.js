var qoutes = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        auther: "--Oscar Wilde"
    },
    {
        qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        auther: "--Dr. Seuss"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        auther: "--Marcus Tullius Cicero"
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        auther: "--Mae West"
    },
    {
        qoute: "“Be the change that you wish to see in the world.”",
        auther: "--Mahatma Gandhi"
    },
    {
        qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
        auther: "--Robert Frost"
    },
    {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        auther: "--Mark Twain"
    },
    {
        qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        auther: "--Oscar Wilde"
    },
    {
        qoute: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        auther: "--Mahatma Gandhi"
    },
    {
        qoute: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        auther: "--Ralph Waldo Emerson"
    },
]

var lastGneratedQoute;
var alreadyDisplayed = [];

function getQoute() {

    if (alreadyDisplayed.length == qoutes.length) {
        alreadyDisplayed = [];
    }

    do {
        var newGneratedQoute = Math.floor(Math.random() * qoutes.length);
    }
    while (lastGneratedQoute == newGneratedQoute || alreadyDisplayed.includes(newGneratedQoute))

    lastGneratedQoute = newGneratedQoute;
    alreadyDisplayed.push(newGneratedQoute);

    document.getElementById("qoute").innerHTML = qoutes[newGneratedQoute].qoute
    document.getElementById("author").innerHTML = qoutes[newGneratedQoute].auther
}
