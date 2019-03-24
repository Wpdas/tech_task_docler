import React from 'react';
import { updateState } from 'rehoc';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

const stateKey = 'modalState';

const Modal = React.memo(
  ({ title, description, negativeButton, positiveButton, onClickNegative, onClickPositive }) => {
    const onClickNegativeHandler = () => {
      updateState(stateKey, { showModal: false });
      if (onClickNegative) onClickNegative();
    };

    const onClickPositiveHandler = () => {
      updateState(stateKey, { showModal: false });
      if (onClickPositive) onClickPositive();
    };

    return (
      <div className={classes.Modal__background}>
        <div className={classes.Modal__content}>
          <h2 className={classes.Modal__content_title}>{title}</h2>
          <p className={classes.Modal__content_description}>{description}</p>
          <div className={classes.Modal__content_buttons}>
            {negativeButton ? (
              <span
                onClick={onClickNegativeHandler}
                className={classes.Modal__content_buttons_negative}
              >
                {negativeButton}
              </span>
            ) : null}
            <span
              onClick={onClickPositiveHandler}
              className={classes.Modal__content_buttons_positive}
            >
              {positiveButton}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  negativeButton: PropTypes.string,
  positiveButton: PropTypes.string,
  onClickNegative: PropTypes.func,
  onClickPositive: PropTypes.func
};

Modal.defaultProps = {
  title: 'Title',
  description: 'Description',
  negativeButton: null,
  positiveButton: 'Ok',
  onClickNegative: null,
  onClickPositive: null
};
