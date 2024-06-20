

export default function GameBoard({onSelectSuare,board}){
    
    
    /* const[matrix,setMatrix]=useState(ib);
    function handleGameboard(index,cindex){
        setMatrix((prev)=>{
            const upate=[...prev.map(inArray=>[...inArray])]
            upate[index][cindex]=symbole;
            return upate;
        })
        onSelectSuare()
    } */
    return(
        <ol id="game-board">
            {board.map((row,index)=>
                <li key={index}>
                    <ol>
                        {row.map((cell,cindex)=>
                        <li key={cindex}>
                            <button onClick={()=>onSelectSuare(index,cindex)} disabled={cell!==null}>{cell}</button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    )
}