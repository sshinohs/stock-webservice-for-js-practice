const API_END_POINT = 'http://localhost:5000';

export const request = async (url) => {
    
        const res = await fetch(url);

        if (res.ok) {
            const json = await res.json();
            return json;
        }

        throw new Error('요청에 실패했다구!');
}

export const fetchItems = async (keyword) => request(`${API_END_POINT}/items/search?keyword=${keyword}`);