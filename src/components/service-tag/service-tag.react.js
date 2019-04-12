/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './service-tag.module.css';

type TProps = {
  /** The main tag label */
  children: string,
  /** A function to call when the tag is removed */
  onRemove?: Function,
  className?: string,
};

export default function ServiceTag(props: TProps) {
  const {children, className, onRemove, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-service-tag']]: true,
      [styles['ui-service-tag--removable']]: !!onRemove,
    },
    className
  );
  return (
    <UIBase className={_classNames} title={String(children)} {...otherProps}>
      <span className={styles['ui-service-tag__inner']}>{children}</span>
      {onRemove && (
        <button className={styles['ui-service-tag__remove']} onClick={onRemove}>
          <Icon size={12}>clear</Icon>
        </button>
      )}
    </UIBase>
  );
}
