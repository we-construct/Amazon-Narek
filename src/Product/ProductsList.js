import Product from "./Product";
import uuid from 'react-uuid'
export default function BodyCounts({items, AddCart}) {
    return (
        <table style={{width: 650}}>
            {/*{JSON.stringify(items)}*/}
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Count</th>
                <th>Buy</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={uuid()}>
                    <Product key={item.id}
                             item={item}
                             AddCart={AddCart}
                    />
                </tr>
            ))}
            </tbody>

        </table>
    );
}
