import { CiSearch } from "react-icons/ci";

import styles from "components/module/Search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.title}>
          <p>همه چیز از انتخاب یک دامنه شروع می‌شود!</p>
          <img src="images/search-domain-arrow.webp" alt="" />
        </div>
        <div className={styles.SearchElement}>
					<button>
            <CiSearch />
          </button>
          <input type="text" />
          <span>.www</span>
     
        </div>
        <div className={styles.price}>
          <div className={styles.priceItem}>
            <span>co.ir.</span>
            <span>69,000</span>
          </div>
          <div className={styles.priceItem}>
            <span>info.</span>
            <span>437,000</span>
            <span>985,000</span>
          </div>
          <div className={styles.priceItem}>
            <span>ws.</span>
            <span>1,165,000</span>
          </div>
          <div className={styles.priceItem}>
            <span>com.</span>
            <span>1,266,000</span>
            <span>1,335,000</span>
          </div>
          <div className={styles.priceItem}>
            <span>us.</span>
            <span>1,410,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
