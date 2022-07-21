import React from "react";

const TableCell: React.FunctionComponent<
  React.PropsWithChildren<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>>
> = ({ children, ...props }) => {
  const classNames = `border border-slate-300${props.className ? ` ${props.className}` : ""}`;
  return (
    <td {...props} className={classNames}>
      {children}
    </td>
  );
};

export default TableCell;
