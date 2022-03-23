export default function Product({item, AddCart}) {

    return (
        <>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>
                <button onClick={() => AddCart(item.id)}>Cart+</button>
            </td>
        </>
    )
}

