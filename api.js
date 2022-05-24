const API_END_POINT = 'http://localhost:5000/echo_call';

export const request = async (message) => {
    try {
        const res = await fetch(`${API_END_POINT}/${message}`);

        if (!res.ok) {
            throw new Error('서버의 상태가 이상하다구!');
        }

        return await res.json();
    } catch (e) {
        throw new Error(`무언가 잘못 되었다구! ${e.message}`);
    }
}