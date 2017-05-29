import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {actions as counterActions} from 'state/counter';
import {Counter} from 'components';

const mapDispatchToProps = (dispatch) => ({
    onAdd: bindActionCreators(counterActions.add,dispatch),
    onSubtract: bindActionCreators(counterActions.subtract,dispatch),
})

const mapStateToProps = (state) => ({
    counter:state.counter
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);