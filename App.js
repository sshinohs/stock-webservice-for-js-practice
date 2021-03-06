import SearchInput from './SearchInput.js';
import Suggestion from './Suggestion.js';
import StockHistory from './StockHistory.js';
import { fetchItems } from './api.js';



export default function App({$app}) {
    this.state = {
        fetchedLanguages: []
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            items: this.state.fetchedItems
        })
    }

    const searchInput = new SearchInput({
        $app,
        initialState: '',
        onChange: async (keyword) => {
            if (keyword.length === 0) {
                this.setState({
                    fetchedItems: []
                });
            } else {
                const items = await fetchItems(keyword);
                this.setState({
                    fetchedItems: items
                });
            }
        }
    });

    const suggestion = new Suggestion({
        $app,
        initialState: {
            selectedIndex: 0,
            items: []
        },
        onSelect: (item) => {
            alert(item.name);
        }
    })

    const stockHistory = new StockHistory({
        $app,
        initialState: {

        }
    })
}