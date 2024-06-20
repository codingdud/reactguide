export default function TabButteN({children,onSelect,isSelected}){
    function handleClick(){
        console.log("clicked")
    }
    return(<li>
        <button className={isSelected?"active":undefined} onClick={onSelect}>{children}</button>
        </li>)
}