const range = () => {
    class Button {
        constructor(element) {
            this.element = element;
        }

        _setPosition(value) {
            this.element.style.left = `${value}%`;
            this.element.setAttribute('value', value);
        }

        _getAttribute(nameAttribute) {
            return this.element.getAttribute(nameAttribute);
        }
    }

    function _init(elem) {
        const leftButton = new Button(document.getElementById('left'));
        const rightButton = new Button(document.getElementById('right'));

        scrollButton(elem, leftButton, rightButton);
    }

    function scrollButton(elem, ...button) {
        return elem.addEventListener('input', (e) => {
            let value = Number(e.currentTarget.value);

            if (Math.abs(value - button[0]._getAttribute('value')) < Math.abs(value - button[1]._getAttribute('value'))) {
                button[0]._setPosition(value);
            } else {
                button[1]._setPosition(value);
            }

            e.currentTarget.style.background =
                `linear-gradient(
                    to right, 
                    rgb(183, 183, 183) ${button[0]._getAttribute('value')}%, 
                    rgb(0, 204, 0) ${button[0]._getAttribute('value')}%, 
                    rgb(0, 204, 0) ${button[1]._getAttribute('value')}%, 
                    rgb(183, 183, 183) ${button[1]._getAttribute('value')}%
                )`;
        });
    }

    _init(document.getElementById('range'));
}

range();