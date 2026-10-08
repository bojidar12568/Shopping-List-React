export default function ShoppingList ({items}) {
    return (
        <div>
            <ol>
                {items.map((shoppingItems, index) => <li key= {index}>{shoppingItems}</li>)}
                </ol>
        </div>
    )
}