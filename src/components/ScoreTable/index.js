import ActionButton from "components/ActionButton";
import React from 'react';
import {connect} from 'react-redux';
import './styles.css';

class ScoreTable extends React.PureComponent
{
    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className='score-container'>
                <div className='score-player'>
                    <span>name 1</span>100000000000
                </div>
                <div className='score-player'>
                    <span>name 1</span>100000000000
                </div>
                <div className='score-player'>
                    <span>name 1</span>100000000000
                </div>
                <div className='score-player'>
                    <span>name 1</span>100000000000
                </div>
                <ActionButton/>
            </div>
        );
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
        getDeckId: () => {},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
