function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var game = {
    init: function init() {
        textarea.init();
        loader.init();
        game.loadSoundsImages(function () {
            game.hideScreens();
            game.showScreen("gamestartscreen");
        });
    },
    playGame: function playGame() {
        if (window.wAudio) {
            window.wAudio.playMutedSound();
        }
        game.start();
    },
    scale: 1,
    resize: function resize() {
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;
        var scale = Math.min(maxWidth / 640, maxHeight / 480);
        var gameContainer = document.getElementById("gamecontainer");
        gameContainer.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")";
        // What is the maximum width we can set based on the current scale
        // Clamp the value between 640 and 1024
        var width = Math.max(640, Math.min(1024, maxWidth / scale));
        gameContainer.style.width = width + "px";
        game.scale = scale;
    },
    loadSoundsImages: function loadSoundsImages(onload) {
        game.img_1 = loader.loadImage("assets/images/alarm.png");
        game.img_3 = loader.loadImage("assets/images/cartoon_man.png");
        loader.onload = onload;
    },
    hideScreens: function hideScreens() {
        var screens = document.getElementsByClassName("gamelayer");
        for (var i = screens.length - 1; i >= 0; i--) {
            var screen = screens[i];
            screen.style.display = "none";
        }
    },
    hideScreen: function hideScreen(id) {
        var screen = document.getElementById(id);
        screen.style.display = "none";
    },
    showScreen: function showScreen(id) {
        var screen = document.getElementById(id);
        screen.style.display = "block";
    },
    start: function start() {
        game.hideScreens();
        game.showScreen("gamearea");
        game.questions_answers.nextAnswer();
    },
    questions_answers: _defineProperty({
        currentAnswer: 0,
        prevAnswer: this.currentAnswer - 1,
        question_count: 19,
        question_1: {
            title: "Համոզմունքի տեսակը.",
            answer: "",
            height: "60px"
        },
        question_2: {
            title: "Կյանքի ո՞ր պահից եք այդ կարծիքն ունեցել։ Հիշեք հնարավորինս կոնկրետ.",
            answer: "",
            height: "60px"
        },
        question_3: {
            title: "Ո՞ր դեպքից (դեպքերից) հետո.",
            answer: "",
            height: "60px"
        },
        question_4: {
            title: "Դեպքն անձամբ Ձե՞ր հետ է պատահել, թե լսել եք ուրիշից ու այդ երևույթի մասին կարծիք ձևավորել այլ մարդու պատմածից.",
            answer: "",
            height: "60px"
        },
        question_5: {
            title: "Ի՞նչ եք կարծում՝ ընդհանրացում կա՞, թե Ձեր համոզմունքը վերաբերվում է բոլոր դեպքերին ու բոլոր իրավիճակներին.",
            answer: "",
            height: "60px"
        },
        question_6: {
            title: "Կա՞ն բացառություններ.",
            answer: "",
            height: "60px"
        },
        question_7: {
            title: "Խնդրում եմ եղեք ավելի անկեղծ ու ուշադիր՝ կա՞ն մարդիկ Ձեր շրջապատում, ում մոտ այդ բացառություններն ավելի շատ են.",
            answer: "",
            height: "60px"
        },
        question_8: {
            title: "Իսկ կա՞ն մարդիկ ում մոտ բացառությունն է բնական ու հիմնական վիճակ.",
            answer: "",
            height: "60px"
        },
        question_9: {
            title: "Կա՞ն Ձեր կյանքում դեպքեր, որոնք բացառություն են այդ օրինաչափությունից.",
            answer: "",
            height: "60px"
        },
        question_10: {
            title: "Մի հատ էլ եկեք անկեղծ լինենք, իսկ կա՞ն աղավաղումներ Ձեր կողմից՝ չափազանցնելու կամ գույները մգեցնելու ձևով.",
            answer: "",
            height: "60px"
        },
        question_11: {
            title: "Տեսականորեն դուք կարո՞ղ եք անել քայլեր, որոնք կփոխեն իրավիճակը.",
            answer: "",
            height: "60px"
        },
        question_12: {
            title: "Իսկ պրակտիկորե՞ն.",
            answer: "",
            height: "60px"
        },
        question_13: {
            title: "Գրե՛ք այդ քայլերը.",
            answer: "",
            height: "60px"
        },
        question_14: {
            title: "Եկեք նորից վերադառնանք համոզմունքերին.",
            answer: "",
            height: "60px"
        },
        question_15: {
            title: "Ձեր մտածածը բացարձակ իրականությո՞ւն է։ Այսինքն օբյեկտիվ իրականություն է, որը կա ու գործում է անկա՞խ ձեզնից, և դուք չգիտակցված երազի նման միայն փաստո՞ւմ եք այդ իրականության առկայությունը.",
            answer: "",
            height: "60px"
        },
        question_16: {
            title: "Ինչի՞ համար եք ընտրում այդ վարքագիծն ու մտածելակերպը։ Ու ոչ թե ինչու, այլ ինչի։ Ցանկացած մտածելակերպի տեսակ ու վարքագիծ ունի, ինչպես ինչո՞ւ (պատճառ), այլ նաև ինչի համար (նպատակ)։ Գտեք ինչի՞ համարը.",
            answer: "",
            height: "60px"
        },
        question_17: {
            title: "Ավելի կոնկրետ՝ ի՞նչ է տալիս Ձեզ այդ մտածելակերպը.",
            answer: "",
            height: "60px"
        },
        question_18: {
            title: "Իսկ դուք ի՞նչ էիք ուզում ստանալ.",
            answer: "",
            height: "60px"
        },
        question_19: {
            title: "Կարո՞ղ եք ընտրել ավելի էֆեկտիվ վարքագիծ։ Այսինքն նույն նպատակին հասնելու ավելի կարճ, ավելի հաճելի ու ավելի էկոլոգիական տարբերակ.",
            answer: "",
            height: "60px"
        },
        endAnswer: function endAnswer() {
            var answer_area = document.getElementsByClassName("answer_area")[0];
            game.questions_answers.question_19.answer = answer_area.value;
            document.getElementById("gamearea").innerHTML = "";

            var res = "<p class='game_result'></p>";
            document.getElementById("gamearea").innerHTML = res;
            var game_result_el = document.getElementsByClassName("game_result")[0];

            for (var i = 1; i <= game.questions_answers.question_count; i++) {
                var old_html = game_result_el.innerHTML;
                var question = "<span class='alarm_icon'></span><span class='question'> " + game.questions_answers["question_" + i].title + "</span></br>";
                var answer = "<span class='answer'> " + game.questions_answers["question_" + i].answer + "</span></br>";
                game_result_el.innerHTML = old_html + question + answer;
            }
        },
        nextAnswer: function nextAnswer() {
            var question_el = document.getElementsByClassName("game_question")[0];
            var answer_area = document.getElementsByClassName("answer_area")[0];
            var textarea_el = document.getElementById("text");

            game.questions_answers.currentAnswer++;

            var current_question = "question_" + game.questions_answers.currentAnswer;
            var prev_question = "question_" + (game.questions_answers.currentAnswer - 1);

            if (game.questions_answers.currentAnswer > 1) {
                document.getElementsByClassName("prev_answer")[0].style.display = "inline-block"; // prev answer btn display
                if (game.questions_answers.currentAnswer !== 2) {
                    document.getElementsByClassName("prev_answer")[0].innerHTML = "Վերադառնալ նախորդ հարցին";
                }

                game.questions_answers[prev_question].answer = answer_area.value;

                var text_area_height = textarea_el.dataset.height;
                if (typeof text_area_height == "undefined") {
                    text_area_height = 60;
                }
                game.questions_answers[prev_question].height = text_area_height;
            }

            if (game.questions_answers.currentAnswer == game.questions_answers.question_count) {
                document.getElementsByClassName("next_answer")[0].style.display = "none";
                document.getElementsByClassName("end_answer")[0].style.display = "inline-block";
            }

            question_el.innerHTML = game.questions_answers[current_question].title;
            answer_area.value = game.questions_answers[current_question].answer;
            answer_area.removeAttribute("style");
            textarea_el.dataset.height = game.questions_answers[current_question].height;
            answer_area.setAttribute("style", "height:" + game.questions_answers[current_question].height + ";");

            if (game.questions_answers.currentAnswer == 14) {
                answer_area.value = game.questions_answers.question_1.answer;
                answer_area.setAttribute("style", "height:" + game.questions_answers.question_1.height + ";");
                textarea_el.dataset.height = game.questions_answers.question_1.height;
                textarea_el.readOnly = true;
            } else {
                textarea_el.readOnly = false;
            }
        }
    }, "prevAnswer", function prevAnswer() {
        var question_el = document.getElementsByClassName("game_question")[0];
        var answer_area = document.getElementsByClassName("answer_area")[0];
        var textarea_el = document.getElementById("text");

        game.questions_answers.currentAnswer--;

        var current_question = "question_" + game.questions_answers.currentAnswer;

        if (game.questions_answers.currentAnswer < game.questions_answers.question_count) {
            document.getElementsByClassName("next_answer")[0].style.display = "inline-block"; // next answer btn display
            document.getElementsByClassName("end_answer")[0].style.display = "none";
        }

        if (game.questions_answers.currentAnswer == 1) {
            document.getElementsByClassName("prev_answer")[0].style.display = "none";
        } else if (game.questions_answers.currentAnswer == 2) {
            document.getElementsByClassName("prev_answer")[0].innerHTML = "Վերադառնալ";
        }

        question_el.innerHTML = game.questions_answers[current_question].title;
        answer_area.value = game.questions_answers[current_question].answer;

        answer_area.setAttribute("style", "height:" + game.questions_answers[current_question].height + ";");
        textarea_el.dataset.height = game.questions_answers[current_question].height;

        if (game.questions_answers.currentAnswer == 14) {
            answer_area.value = game.questions_answers.question_1.answer;
            answer_area.setAttribute("style", "height:" + game.questions_answers.question_1.height + ";");
            textarea_el.dataset.height = game.questions_answers.question_1.height;
            textarea_el.readOnly = true;
        } else {
            textarea_el.readOnly = false;
        }
    })
};

var textarea = {
    init: function init() {
        var observe;
        if (window.attachEvent) {
            observe = function observe(element, event, handler) {
                element.attachEvent('on' + event, handler);
            };
        } else {
            observe = function observe(element, event, handler) {
                element.addEventListener(event, handler, false);
            };
        }

        var text = document.getElementById('text');
        var length = [];

        function resize() {
            if (length.length < 2) {
                length.push(text.value.length);
            } else {
                length.shift();
                length.push(text.value.length);
            }

            if (text.scrollHeight - 30 >= 180 && length[0] < length[1]) {
                text.style.height = '180px';
                text.dataset.height = text.style.height;
                text.scrollTop = text.scrollHeight;
            } else {
                text.style.height = 'auto';
                text.style.height = text.scrollHeight - 30 + 'px';
                text.dataset.height = text.style.height;
            }
        }

        function delayedResize() {
            window.setTimeout(resize, 0);
        }

        observe(text, 'change', resize);
        observe(text, 'cut', delayedResize);
        observe(text, 'paste', delayedResize);
        observe(text, 'drop', delayedResize);
        observe(text, 'keydown', delayedResize);
    }
};

var loader = {
    loaded: true,
    loadedCount: 0,
    totalCount: 0,
    init: function init() {
        var mp3Support, oggSupport;
        var audio = document.createElement("audio");

        if (audio.canPlayType) {
            mp3Support = "" !== audio.canPlayType("audio/mpeg");
            oggSupport = "" !== audio.canPlayType("audio/ogg; codecs=\"vorbis\"");
        } else {
            mp3Support = false;
            oggSupport = false;
        }

        loader.soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined;
    },
    loadImage: function loadImage(url) {
        this.loaded = false;
        this.totalCount++;
        game.showScreen("loadingscreen");
        var image = new Image();
        image.addEventListener("load", loader.itemLoaded, false);
        image.src = url;
        return image;
    },
    soundFileExtn: ".ogg",
    loadSound: function loadSound(url) {
        this.loaded = false;
        this.totalCount++;
        game.showScreen("loadingscreen");
        var audio = new (window.wAudio || Audio)();
        audio.addEventListener("canplaythrough", loader.itemLoaded, false);
        audio.src = url + loader.soundFileExtn;
        return audio;
    },
    itemLoaded: function itemLoaded(ev) {
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false);
        loader.loadedCount++;
        document.getElementById("loadingmessage").innerHTML = "բեռնվում է. " + loader.loadedCount + "/" + loader.totalCount;
        if (loader.loadedCount === loader.totalCount) {
            loader.loaded = true;
            loader.loadedCount = 0;
            loader.totalCount = 0;
            game.hideScreen("loadingscreen");
            if (loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
};

// Intialize game once page has fully loaded
window.addEventListener("load", function () {
    game.resize();
    game.init();
});

window.addEventListener("resize", function () {
    game.resize();
});

document.addEventListener("touchmove", function (ev) {
    ev.preventDefault();
});