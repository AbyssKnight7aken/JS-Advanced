function closest(selector, element) {
    let elem = element;

    do {
        if (elem.matches(selector)) return elem;
        elem = elem.parentElement;
    } while (elem);
}
