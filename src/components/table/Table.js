import React from "react";

import "./table.css";
import { click } from "@testing-library/user-event/dist/click";

const Table = ({
  headerData,
  renderHeader,
  bodyData,
  renderBody,
  renderFooter,
}) => {


  return (
    <table>
      {headerData && renderHeader && (
        <thead>
          <tr>{headerData.map((item, index) => renderHeader(item, index))}</tr>
        </thead>
      )}

      {bodyData && renderBody && (
        <tbody>{bodyData.map((item, index) => renderBody(item, index))}</tbody>
      )}
      {renderFooter && <tfoot>{renderFooter}</tfoot>}
    </table>
  );
};

export default Table;
