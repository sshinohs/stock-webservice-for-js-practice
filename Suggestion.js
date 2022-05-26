export default function Suggestion ({$app, initialState}) {
    this.$element = document.createElement('div');
    this.$element.className = 'Suggestion';
    $app.appendChild(this.$element);

    this.state = {
        selectedIndex: 0,
        items: initialState.items
    };

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        };
        this.render();
    }

    this.render = () => {
        const { items = [], selectedIndex } = this.state;
        if (items.length > 0) {
            this.$element.style.display = 'block';
            this.$element.innerHTML = `
                <ul>
                    ${items.map((item, index) => `
                        <li data-index="${index}">
                            ${item.name}
                        </li>
                    `
                    ).join('')}
                </ul>
            `
        } else {
            this.$element.style.display = 'none';
            this.$element.innerHTML = '';
        }
    }

    this.render();
}