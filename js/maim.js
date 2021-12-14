$(document).ready(function () {
    var currentFloor = 2; // переменная где хранится текущий этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в  SVG
    var counterUp = $(".counter-up"); //кнопка увелечения этажа
    var counterDown = $(".counter-down"); //кнопка уменьшения этажа
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счётчик справа 
    });

     floorPath.on("click", toggleModel) /* при клике на этаж вызвать окно */

     modalCloseButton.on("click", toggleModel); /* клик на кнопку закрыть убирает окно */
     viewFlatsButton.on("click", toggleModel);
    counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
     if(currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
        currentFloor++; // прибавляем 1 этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
        useGroupping: false}); // форматируем переменную с этажём, чтобы было 01 а не 1
        $(".counter").text(usCurrentFloor);   // записываем значение этажа в счётчик справа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
     }
    });

    counterDown.on("click", function() {// отслеживаем клик по кнопке вниз
        if (currentFloor > 2) { // проверяем значение этажа, оно не должно быть меньше 02
            currentFloor--; // уменьшаем на 1 этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
            useGroupping: false}); // форматируем переменную с этажём, чтобы было 01 а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });
    function toggleModel() { // функция открыть-закрыть окно
        modal.toggleClass("is-open");
}
});     