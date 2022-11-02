import './paginationButtons.css'

const PaginationButtonsComponent = ({ more, next, prev, prevPageUrl }) => {
    return (
        <>
            <div id="pagination-buttons__container">
                {prevPageUrl
                    ? <button id="pagination-buttons__prev" onClick={prev}>Prev</button>
                    : <button id="pagination-buttons__prev" disabled>Prev</button>
                }
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}

export default PaginationButtonsComponent