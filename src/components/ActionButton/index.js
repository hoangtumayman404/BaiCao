import 'components/ActionButton/styles.css';
import React from 'react';
import {connect} from 'react-redux';

class ActionButton extends React.PureComponent
{
    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className='button-container'>
                <div className='button-item'>
                    BUTTON 1
                </div>
                <div className='score-player'>
                    BUTTON 2
                </div>
                <div className='score-player'>
                    BUTTON 3
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
