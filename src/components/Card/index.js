import cardBack from "assets/cardback.png";
import classNames from 'classnames';
import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import './styles.css';

class Card extends React.PureComponent
{
    render()
    {
        const {reveal, image, code} = this.props;
        return (
            <div className='card-container'>
                <div className="flip-card">
                    <div className={classNames("flip-card-inner", {"flip": reveal})}>
                        <div className="flip-card-front">
                            <img src={cardBack} alt={code} className='card-image'/>
                        </div>
                        <div className="flip-card-back">
                            <img src={image} alt={code} className='card-image'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    code: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const mapStateToProps = state =>
{
    return {
        reveal: state.buttonAction.revealCard,
    };
};

export default connect(mapStateToProps)(Card);
