import './styles.css'
export const Search = (props) => {
    return (
        <input name="search-input" placeholder="Search by part.." type="text" onChange={props.handleSearchUpdate} />
    )
}