import Card from "components/Card";
import {CARD_SCORE} from "components/Player/variable";
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getCard, updateName, updateScore} from "services/player/action";
import './styles.css';

class Player extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        const {playerName, updateName} = this.props;
        updateName(playerName);
    }

    renderCards = () =>
    {
        const {cards} = this.props;
        return cards.map((card, index) =>
        {
            const {image, code} = card;
            return (
                <Card image={image} code={code} key={index}/>
            );
        });
    };

    updateScore = () =>
    {
        const {cards, updateScore} = this.props;
        if (cards.length < 3) return;
        const sum = cards.reduce((sum, card) => sum + CARD_SCORE[card.value], 0);

        if (sum === 30 && cards.map(card => card.value).sort().join('') === 'JACKKINGQUEEN') updateScore(10);
        else updateScore(sum % 10);
    };

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const {drawCard, getCard, revealCard, cards} = this.props;
        if (!prevProps.drawCard && drawCard) getCard();
        if ((!prevProps.revealCard && revealCard)
            || (prevProps.cards !== cards && revealCard)) this.updateScore();
    }

    render()
    {
        const {playerName} = this.props;
        return (
            <div>
                <div className='player-card'>
                    {this.renderCards()}
                </div>
                <div className='player-name'>
                    {playerName}
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    playerName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) =>
{
    const {index} = ownProps;
    const {cards} = state['player' + index];
    return {
        revealCard: state.buttonAction.revealCard,
        drawCard: state.buttonAction.drawCard,
        cards,
    };
};

const mapDispatchToProps = (dispatch, ownProps) =>
{
    const {index} = ownProps;
    return {
        getCard: () => dispatch(getCard(index)),
        updateName: (name) => dispatch(updateName(name, index)),
        updateScore: (score) => dispatch(updateScore(score, index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
