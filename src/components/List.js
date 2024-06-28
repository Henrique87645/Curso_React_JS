import Item from './Item'
function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1947}/>
            <Item marca="Koenigsegg Jesko" ano_lancamento={2019}/>
            <Item marca="lamborghini" ano_lancamento={1963}/>
            <Item />
        </ul>
        </>
    )
 }
 export default List