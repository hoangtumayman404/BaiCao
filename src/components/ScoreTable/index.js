import ActionButton from "components/ActionButton";
import Modal from "components/Modal";
import React from 'react';
import {connect} from 'react-redux';
import {updateRound} from "services/buttonAction/action";
import './styles.css';
import {playerScores, totalPlayerScores, MAX_ROUND} from "./variables";

class ScoreTable extends React.PureComponent
{
    hadUpdateScore = false;

    renderScorePlayer = (index) =>
    {
        const {name} = this.props['player' + index];
        const playerScore = playerScores[index];
        return (
            <div className='score-player'>
                <div>{name}</div>
                &nbsp;
                <div>{playerScore}</div>
            </div>
        );
    };

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const {player0, player1, player2, player3} = this.props;
        const arrayScore = [player0.score, player1.score, player2.score, player3.score];
        if (!arrayScore.some(item => item === null) && !this.hadUpdateScore)
        {
            const maxScore = Math.max(...arrayScore);

            const count = arrayScore.reduce((total, score) => total += score === maxScore, 0);

            const playerScore = Math.floor(totalPlayerScores / count);

            let userWin = [];
            arrayScore.forEach((score, index) =>
            {
                if (score === maxScore)
                {
                    playerScores[index] += playerScore;
                    userWin.push(this.props['player' + index]);
                }
            });

            this.hadUpdateScore = true;
            this.forceUpdate();

            this.handleModal(userWin);
        }
    }

    handleModal = (userWin) =>
    {
        const {round} = this.props;
        const title = 'Kết quả ' + (round === MAX_ROUND ? 'chung cuộc' : 'vòng ' + round);

        if (round === MAX_ROUND)
        {
            const maxScore = Math.max(...playerScores);
            userWin = [];
            playerScores.forEach((score, index) =>
            {
                if (score === maxScore) userWin.push(this.props['player' + index]);
            });
        }
        let content = 'Chúc mừng ' + userWin.map(item => item.name).join(', ');

        const buttonText = (round === MAX_ROUND ? 'Chơi lại' : 'Vòng kế');
        this.modal.open(title, content, buttonText);
    };

    handleNextRound = async () =>
    {
        let {round, nextRound} = this.props;
        round = round + 1;
        if (round > MAX_ROUND)
        {
            round = 1;
            playerScores.forEach((item, index) => playerScores[index] = 0);
        }
        nextRound(round);
    };

    render()
    {
        return (
            <>
                <div className='score-container'>
                    {playerScores.map((item, index) => this.renderScorePlayer(index))}
                    <ActionButton/>
                </div>
                <Modal ref={ref => this.modal = ref} onClickButton={this.handleNextRound}/>
            </>
        );
    }
}

const mapStateToProps = state =>
{
    return {
        round: state.buttonAction.round,
        player0: state.player0,
        player1: state.player1,
        player2: state.player2,
        player3: state.player3,
    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        nextRound: (round) => dispatch(updateRound(round)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
