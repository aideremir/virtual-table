import React from "react";
import "./MyTable.css";

const rowHeight = 30;
const visibleRowCount = 20;

// @ts-ignore
function MyTable({ data }) {
  const tableRef = React.useRef(null);
  const [startIndex, setStartIndex] = React.useState(0);
  const [visibleData, setVisibleData] = React.useState(data.slice(0, visibleRowCount));

  const onScroll = React.useCallback(() => {
    if (tableRef.current) {
      // @ts-ignore
      const startIndex = Math.floor(tableRef.current.scrollTop / rowHeight);
      const endIndex = Math.min(startIndex + visibleRowCount, data.length);
      setStartIndex(startIndex);
      setVisibleData(data.slice(startIndex, endIndex));
    }
  }, [data]);

  React.useEffect(() => {
    if(tableRef.current) {
      // @ts-ignore
      tableRef.current.addEventListener("scroll", onScroll);
    }

    return () => {
      if(tableRef.current) {
        // @ts-ignore
        tableRef.current.removeEventListener("scroll", onScroll);
      }
    }
  }, [onScroll]);

  return (<div>
    <p>
      {startIndex} - {startIndex + visibleData.length} of {data.length}
    </p>
    <div className="table-container" ref={tableRef}>

      <div style={{paddingTop: startIndex * rowHeight, paddingBottom: (data.length - startIndex) * rowHeight, position: 'relative'}}>
        <table className="my-table">
          <tbody>
          {
            visibleData.map((row: any[], rowIndex: number) => (
              <tr key={rowIndex} className='my-table-row'>
                {
                  row.map((cell, cellIndex: number) => (
                    <td key={cellIndex} style={{height: rowHeight}}>{cell}</td>
                  ))
                }
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>)
}

export default MyTable;
