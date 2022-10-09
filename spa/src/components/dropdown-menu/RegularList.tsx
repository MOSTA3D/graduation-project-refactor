
interface RegularListProps{
    resourceName:string;
    ListItem:React.FC<any>;
    items:any[];
}
function RegularList(props:RegularListProps){
    const {resourceName, ListItem, items} = props;
    return (
        <ul>
            {items.map(el=><ListItem {...{[resourceName]: el}}/>)}
        </ul>
    )
}

export default RegularList;