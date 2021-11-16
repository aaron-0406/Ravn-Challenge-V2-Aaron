interface DataCellProps {
  attribute: string;
  value: string;
}

const DataCell: React.FC<DataCellProps> = ({ attribute, value }) => {
  return (
    <div className="data-cell">
      <div className="data-cell__indicator">
        <p>{attribute}</p>
      </div>
      <div className="data-cell__information">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default DataCell;
