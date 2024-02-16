import Home from '../components/Home';
import {connect} from 'react-redux';
import {addToCart} from '../services/actions/action';
import {removeToCart} from '../services/actions/action';

const mapStateToProps=state=>({
 //data:state.cardItem
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:()=>dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);
//export default Home;