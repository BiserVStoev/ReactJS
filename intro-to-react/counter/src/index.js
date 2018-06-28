import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

ReactDOM.render(Counter(), document.getElementById('root'));
const renderer = ReactDOM.render;

export default renderer;
