import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';

ReactDOM.render(Timer(), document.getElementById('root'));

setInterval(() => ReactDOM.render(Timer(), document.getElementById('root')), 1000);