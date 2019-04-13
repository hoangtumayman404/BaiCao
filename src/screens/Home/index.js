import cardBack from 'assets/cardback.png';

import PlayerCard from "components/Player";
import ScoreTable from "components/ScoreTable";
import React from 'react';
import {connect} from 'react-redux';
import {getDeckId} from "services/deck/action";
import './styles.css';

class Home extends React.PureComponent
{
    componentDidMount()
    {
        this.props.getDeckId();
    }

    render()
    {
        const {shuffle} = this.props;
        return (
            <div className='home-container'>
                <ScoreTable/>
                <div className='home-round'>{this.props.round}</div>
                <div className='home-player home-player-12'>
                    <PlayerCard playerName={'Người chơi 1'} index={0}/>
                </div>
                <div className='home-player home-player-3'>
                    <PlayerCard playerName={'Người chơi 2'} index={1}/>
                </div>
                <div className='home-player home-player-6'>
                    <PlayerCard playerName={'Bạn'} index={2}/>
                </div>
                <div className='home-player home-player-9'>
                    <PlayerCard playerName={'Người chơi 3'} index={3}/>
                </div>
                <img src={cardBack} alt={''} width={150} className={shuffle.loading ? "rotate" : ""}/>
            </div>);
    }
}

const mapStateToProps = state =>
{
    return {
        deckId: state.deck.deck_id,
        shuffle: state.buttonAction.shuffle,
        round: state.buttonAction.round,
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
        getDeckId: () => dispatch(getDeckId()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
