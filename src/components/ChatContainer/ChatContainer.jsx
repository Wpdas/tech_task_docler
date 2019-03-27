import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './ChatContainer.module.scss';

const ChatContainer = ({ children }) => {
  const containerRef = React.createRef();

  // Using useEffect to get containerRef after it is setted
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  return (
    <section ref={containerRef} className={classes.ChatContainer}>
      <div className={classes.ChatContainer__container}>{children}</div>
    </section>
  );
};

export default ChatContainer;

ChatContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
