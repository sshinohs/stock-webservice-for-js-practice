import { request } from './api.js';

export default function App({$app}) {
    
    function ham() {
        const king = request('hamzzang');
        console.log(king);
    }
    console.log('hing');
    ham();
}