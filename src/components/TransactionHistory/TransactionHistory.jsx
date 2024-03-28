import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.descrList}>
          <th className={styles.descr}>Type</th>
          <th className={styles.descr}>Amount</th>
          <th className={styles.descr}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.data}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.dataInfo} key={id}>
            <td className={styles.dataTypes}>{type}</td>
            <td className={styles.dataTypes}>{amount}</td>
            <td className={styles.dataTypes}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
