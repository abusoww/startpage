String.prototype.replaceChars = function (character, replacement) {
    var str = this;
    var a;
    var b;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == character) {
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query) {
    switch (query.substr(0, 2)) {
        case "-a":
            query = query.substr(3);
            window.location = "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" +
                query.replaceChars(" ", "+");
            break;
        case "-y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "+");
            break;
        case "-w":
            query = query.substr(3);
            window.location =
                "https://en.wikipedia.org/w/index.php?search=" +
                query.replaceChars(" ", "%20");
            break;
        case "-m":
            query = query.substr(3);
            window.location =
                "http://www.wolfreealpha.gitlab.io/input/?i=" +
                query.replaceChars("+", "%2B");
            break;
        case "-d":
            query = query.substr(3);
            window.location =
            "https://dexscreener.com/search?q=" +
            query.replaceChars("+", "%2B");
            break;
        case "-n":
            query = query.substr(3);
            window.location =
                "https://nyaa.si/?q=" +
                query.replaceChars("+", "%2B");
            break;
        case "-u":
            query = query.substr(3);
            window.location =
                "https://sukebei.nyaa.si/?q=" +
                query.replaceChars("+", "%2B");
            break;
        case "-s":
            query = query.substr(3);
            window.location =
                "https://shopee.ph/search?keyword=" +
                query.replaceChars("+", "%2B");
            break;
    	case "-g":
            query = query.substr(3);
            window.location =
		        "https://www.google.com/search?q=" +
                query.replaceChars("+", "%2B");
            break;
    	case "-x":
            query = query.substr(3);
            window.location =
		        "https://x.com/search?q=" +
                query.replaceChars("+", "%2B");
            break;
        case "-h":
            query = query.substr(3);
            if (query.length == 0 || !query) {
              window.location = "https://nhentai.net/";
              break;
            }
            window.location =
            "https://nhentai.net/search/?q=" +
            query.replaceChars("+", "%2B");
            break;
        case "-repo":
            window.location =
            "https://github.dev/abusoww/startpage" +
            query.replaceChars("+", "%2B");
        default:
            window.location = "https://search.brave.com/search?q=" +
                query.replaceChars(" ", "+");
    }
}

window.onload = function () {
    // search
    searchinput = document.getElementById("searchbox");
    if (!!searchinput) {
        searchinput.addEventListener("keypress", function (a) {
            var key = a.keyCode;
            if (key == 13) {
                var query = this.value;
                search(query);
            }
        });
    }

    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");
}
