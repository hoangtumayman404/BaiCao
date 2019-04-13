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
        return (
            <div className='home-container'>
                <ScoreTable/>
                <div className='home-player home-player-12'>player 12</div>
                <div className='home-player home-player-3'>player 3</div>
                <div className='home-player home-player-6'>player 6</div>
                <div className='home-player home-player-9'>player 9</div>
                {this.props.deckId}
            </div>);
    }
}

const mapStateToProps = state =>
{
    return {
        deckId: state.deck.deck_id,
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
        getDeckId: () => dispatch(getDeckId()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
