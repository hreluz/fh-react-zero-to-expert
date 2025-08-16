interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({searches, onLabelClicked}: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous searches</h2>

      <div className="previous-searches-list">
        {
          searches.map((term) => (
            <li onClick={() => onLabelClicked(term)}>{term}</li>
          ))
        }
      </div>
    </div>
  )
}
