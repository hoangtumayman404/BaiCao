import React from 'react';
import {connect} from 'react-redux';
import {shuffleCard, revealCard, drawCard} from "services/buttonAction/action";
import './styles.css';

class ActionButton extends React.PureComponent
{
    handleShuffleCards = () =>
    {
        this.props.shuffleCard();
    };

    handleRevealCards = () =>
    {
        this.props.revealCard();
    };

    handleDrawCards = () =>
    {
        this.props.drawCard();
    };

    render()
    {
        const {reveal, draw, shuffle} = this.props;
        return (
            <div className='button-container'>
                <button className='button-item' onClick={this.handleShuffleCards}
                        disabled={draw || shuffle.loading}>
                    Shuffle
                </button>
                <button className='button-item' onClick={this.handleDrawCards}
                        disabled={shuffle.loading || reveal}>
                    Draw
                </button>
                <button className='button-item' onClick={this.handleRevealCards}
                        disabled={!draw || shuffle.loading}>
                    Reveal
                </button>
            </div>
        );
    }
}

const mapStateToProps = state =>
{
    return {
        reveal: state.buttonAction.drawCard,
        draw: state.buttonAction.drawCard,
        shuffle: state.buttonAction.shuffle,
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
        shuffleCard: () => dispatch(shuffleCard()),
        revealCard: () => dispatch(revealCard()),
        drawCard: () => dispatch(drawCard()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
