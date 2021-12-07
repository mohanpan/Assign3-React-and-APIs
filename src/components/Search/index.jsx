import './styles.css'
export const Search = (props) => {
    return (
        <input name="search-input" placeholder="Search by parts.." type="text" onChange={props.handleSearchUpdate} />
    )
}