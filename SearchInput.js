export default function SearchInput({ $app, initialState, onChange }) {
    this.$element = document.createElement('form');
    this.$element.className = "SearchInput";
    this.state = initialState;

    $app.appendChild(this.$element);

    this.render = () => {
        this.$element.innerHTML = `
            <input class="SearchInput__input" type="text" placeholder="검색어를 입력하세용.">
            <img src="./assets/search_icon.png">
        `;
    };

    this.render();

    this.$element.addEventListener('keyup', (e) => {
        const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

        if (!actionIgnoreKeys.includes(e.key)) {
            onChange(e.target.value);
        }
    });

    this.$element.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}