/* @flow */
import React from 'react';
import {get} from 'lodash';
import cx from 'classnames';
import {compose, getContext, setDisplayName, withProps} from 'recompose';
import PropTypes from 'prop-types';

import Icon from '../icon';
import {UIBase} from '../layout';

import styles from './table.module.css';

type TTableCellProps = {
  children: any,
  id?: string,
  order?: 'asc' | 'desc',
  orderBy?: string,
  className?: string | Object,
  // Provided via context
  table: {
    head?: boolean,
    body?: boolean,
    footer?: boolean,
    border?: boolean,
  },
  // Derived from props
  header: boolean,
  active: boolean,
  sortable: boolean,
  outerBorder: boolean,
};

export function TableCell(props: TTableCellProps) {
  const {active, children, header, order, className, ...otherProps} = props;
  const icon = `keyboard_arrow_${order === 'desc' ? 'down' : 'up'}`;
  // const Component = header ? StyledTableHeaderCell : StyledTableCell;

  const _classNames = cx(
    {
      [styles['ui-table-cell']]: !header,
      [styles['ui-table-header']]: !!header,
    },
    className
  );

  return (
    <UIBase
      component={header ? 'th' : 'td'}
      className={_classNames}
      {...otherProps}
    >
      {children}
      {active && <Icon>{icon}</Icon>}
    </UIBase>
  );
}

export default compose(
  setDisplayName('TableCell'),
  getContext({
    table: PropTypes.shape({
      head: PropTypes.bool,
      body: PropTypes.bool,
      footer: PropTypes.bool,
      border: PropTypes.bool,
    }),
  }),
  withProps(props => {
    const header = !!props.table && !!props.table.head;
    const active =
      header && !!props.id && !!props.orderBy && props.id === props.orderBy;
    const sortable = !!props.orderBy;
    const tableBorder = !!get(props, ['table', 'border']);
    return {header, active, sortable, tableBorder};
  })
)(TableCell);
