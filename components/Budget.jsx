export default function Budget({ transactions }) {
    const sum = transactions.reduce((acc, item) => acc + item.amount, 0);

    return <p>{sum.toFixed(2)} €</p>
}
