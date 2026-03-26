let phrases = [
  {
    author: "Грег Плит",
    text: "Никто не становится сильнее, тренируясь с лёгкостью. Настоящий рост начинается там, где заканчивается зона комфорта.",
    image: "изображения для сайта/javascript-photo/грег плит.jpg"
  },
  {
    author: "Грег Плит",
    text: "Каждое повторение — это инвестиция в себя. Твоё тело ответит на то, что ты в него вложил.",
    image: "изображения для сайта/javascript-photo/грег плит.jpg"
  },
  {
    author: "Брюс Ли",
    text: "Не бойся того, кто изучает 10 000 ударов. Бойся того, кто изучает один удар 10 000 раз.",
    image: "изображения для сайта/javascript-photo/брюс ли.jpg"
  },
  {
    author: "Брюс Ли",
    text: "Будь как вода: принимай форму сосуда, в который попадаешь. Гибкость и адаптация — ключ к преодолению любых препятствий.",
    image: "изображения для сайта/javascript-photo/брюс ли.jpg"
  },
  {
    author: "Брюс Ли",
    text: "Осознанность — это самый мощный инструмент. Сосредоточься на том, что делаешь здесь и сейчас.",
    image: "изображения для сайта/javascript-photo/брюс ли.jpg"
  },
  {
    author: "Арнольд Шварценеггер",
    text: "Сила не приходит от побед. Сила вырастает из поражений. Если ты падаешь, но встаёшь и идёшь дальше — вот что делает тебя сильным.",
    image: "изображения для сайта/javascript-photo/шварценеггер.jpg"
  },
  {
    author: "Арнольд Шварценеггер",
    text: "Я ненавидел каждое повторение, но говорил себе: Не сдавайся, сейчас ты страдаешь, а завтра ты станешь чемпионом.",
    image: "изображения для сайта/javascript-photo/шварценеггер.jpg"
  },
  {
    author: "Арнольд Шварценеггер",
    text: "Чем больше ты работаешь над собой, тем больше возможностей открывается перед тобой.",
    image: "изображения для сайта/javascript-photo/шварценеггер.jpg"
  },
  {
    author: "Криштиану Роналду",
    text: "Моя мотивация — это мой разум. Я всегда хочу быть лучше, чем вчера. Нет предела совершенству.",
    image: "изображения для сайта/javascript-photo/роналду.jpg"
  }
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let button = document.querySelector('.button');
let author = document.querySelector('.author');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

function updateQuote() {
    let randomElement = getRandomElement(phrases);
    
    // Меняем текст цитаты и автора (плавно, если smoothly работает с текстом)
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
    smoothly(author, 'textContent', randomElement.author);
    
    let tempImg = new Image();
    tempImg.onload = function() {
        image.style.width = '';
        image.style.height = '';
        
        if (tempImg.height > tempImg.width) {
            image.style.width = '40%';
            image.style.height = 'auto';
        } else if (tempImg.width > tempImg.height) {
            image.style.width = '50%';
            image.style.height = 'auto';
        } else {
            image.style.width = '45%';
            image.style.height = 'auto';
        }
        
        if (tempImg.width === 736 || tempImg.height === 730) {
            image.style.width = '40%';
            image.style.height = '40%';
        }
        
        image.src = randomElement.image;
    };
    tempImg.onerror = function() {
        console.warn('Не удалось загрузить изображение для определения размеров');
        image.src = randomElement.image;
    };
    tempImg.src = randomElement.image;
}

button.addEventListener('click', updateQuote);
