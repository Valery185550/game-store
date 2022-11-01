import classNames from 'classnames';
import React from 'react';
import styles from "./button.module.css";

export const Button = ({
    onClick,
    type,
    children,
    size = `s`
}) => {
  const btnClass = classNames({
    [styles.btn]:true,
    [styles.secondary]: type === 'secondary',
    [styles.primary]: type === 'primary',
    [styles.small]: size === 's',
    [styles.medium]: size === 'm',

  })

  return (
    <button className={btnClass} onClick = {onClick}>
        {children}
    </button>
  )
}
