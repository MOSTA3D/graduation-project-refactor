
interface RegularListProps{
    resourceName:string;
    ListItem:React.FC<any>;
    items:any[];
}
function RegularList(props:RegularListProps){
    const {resourceName, ListItem, items} = props;
    return (
        <>
            {items.map(el=><ListItem {...{[resourceName]: el}}/>)}
        </>
    )
}

export default RegularList;