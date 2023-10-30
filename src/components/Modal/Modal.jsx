import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentDidUpdate() {}
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'auto';
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.handleOverlay}>
        <div className={css.modal}>
          <img className={css.img} src={this.props.currentImg} alt='' />
        </div>
      </div>
    );
  }
}
