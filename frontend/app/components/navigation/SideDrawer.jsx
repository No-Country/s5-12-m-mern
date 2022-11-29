import React, {useRef} from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './SideDrawer.module.css';

const SideDrawer = props => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      in={props.show}
      nodeRef={nodeRef}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles["side-drawer"]} onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );
};

export default SideDrawer;
