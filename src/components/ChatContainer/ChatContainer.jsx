import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './ChatContainer.module.scss';

const ChatContainer = ({ children }) => {
  const containerRef = React.createRef();

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  return (
    <div ref={containerRef} className={classes.ChatContainer}>
      {children}
    </div>
  );
};

export default ChatContainer;

ChatContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
