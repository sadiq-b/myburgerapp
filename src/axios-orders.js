import axios from 'axios';


const instances=axios.create({
    baseURL:'https://react-my-burger-86797.firebaseio.com'
});

export default instances;