const generateData = (rowCount = 10, colCount = 10 ) => {
  const data = [];

  for(let i=0; i<rowCount; i++){
    const row = [];
    for(let j=0; j<colCount; j++){
      row.push(`Row${i} Col${j}`);
    }
    data.push(row);
  }

  return data;
}

export const data = generateData(100, 10);
