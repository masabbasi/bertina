import styles from "components/element/CustomerCommentCard.module.css";

function CustomerCommentCard({ image, name, company, comment }) {
  return (
    <div className={styles.slide}>
      <div className={styles.header}>
        <img src={image} alt={company} />
        <div className={styles.detail}>
          <span className={styles.name}>{name}</span>
          <span className={styles.company}>{company}</span>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}

export default CustomerCommentCard;
