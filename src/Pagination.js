/* eslint-disable */
import './Pagination.css';
const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav className="Nav">
                {pageNumbers.map(number => <li key={number}><a className="a"onClick={() => paginate(number)} href="!#">{number}</a></li>)}
            </nav>
            <div className="NoCharacters">
                {totalPosts== 0 && <h2>There are no residents in this location!</h2>}
                
            </div>
        </div>
    )
}

export default Pagination