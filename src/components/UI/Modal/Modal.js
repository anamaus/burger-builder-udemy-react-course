import React from 'react';
import classes from './Modal.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
    //checks if show prop changes. if not it won't update the component or child components.
    shouldComponentUpdate(nextProps,nextState) {
        return  nextProps.show !== this.props.show
    }

    componentWillUpdate () {
        console.log('modal updated');
    }

    render () {
        return (
            <Wrapper>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                        opacity: this.props.show ? 1 : 0 ,
                    }}
                >
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}

export default Modal;