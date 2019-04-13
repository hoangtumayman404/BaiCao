import React from 'react';
import './styles.css';

class Modal extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: '',
            buttonText: '',
            content: '',
            open: false,
        };
    }

    open = (title, content, buttonText) =>
    {
        this.setState({open: true, title, content, buttonText});
    };

    close = (e) =>
    {
        e.stopPropagation();
        this.setState({open: false});
    };
    //
    // componentDidMount()
    // {
    //     document.addEventListener('mousedown', this.handleClickOutside);
    // }
    //
    // componentWillUnmount()
    // {
    //     document.removeEventListener('mousedown', this.handleClickOutside);
    // }
    //
    // handleClickOutside = (event) =>
    // {
    //     if (this.modalRef && !this.modalRef.contains(event.target))
    //     {
    //         this.close(event);
    //     }
    // };

    render()
    {
        const {open, title, content, buttonText} = this.state;
        if (!open) return null;
        return (
            <div className="modal">
                <div className="modal-content flex-center" ref={ref => this.modalRef = ref}>
                    <h2>{title}</h2>
                    <div className='modal-text'>{content}</div>
                    <div className='modal-footer'>
                        <button onClick={this.props.onClickButton} className='modal-button'>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
