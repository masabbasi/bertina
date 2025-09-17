import styles from "components/module/nav/DesktopMenuItems.module.css";
import { mainCategory } from "../../../constance/mainCategory";
import { FaChevronDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function DesktopMenuItems() {
  return (
    <div>
      <ul className={styles.allItems}>
        {mainCategory.map((item) => (
          <li key={item.title} className={styles.item}>
            {item.title === "دامنه" ? (
              <>
                <span className={styles.itemTitle}>
                  {item.title}
                  {item.children && (
                    <span className={styles.arrowIcon}>
                      <FaChevronDown />
                    </span>
                  )}
                </span>
                {item.children && (
                  <ul className={styles.itemList}>
                    <li className={styles.domains}>
                      <div className={styles.domainsRight}>
                        <p className={styles.domainsRightTitle}>
                          {item.children.title}
                        </p>
                        <p className={styles.domainsRightDesc}>
                          {item.children.desc}
                        </p>
                        <ul>
                          {item.children.link.map((linkItem, index) => (
                            <li key={index}>{linkItem.title}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.domainsLeft}>
                        <div className={styles.search}>
                          <button>
                            <CiSearch />
                            جستجو
                          </button>
                          <input type="text" />

                          <span>.www</span>
                        </div>
                        <div className={styles.domainsItem}>
                          {item.children.domains.map((domainsItem, index) => (
                            <div key={index}>
                              <span>{domainsItem.domain}</span>
                              {domainsItem.price}
                            </div>
                          ))}
                        </div>
                        <img src={item.children.image} alt="" />
                      </div>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <>
                {item.children ? (
                  <>
                    <span className={styles.itemTitle}>
                      {item.title}
                      <span className={styles.arrowIcon}>
                        <FaChevronDown />
                      </span>
                    </span>
                  </>
                ) : (
                  <a href="#" className={styles.itemTitle}>
                    {item.title}
                  </a>
                )}
                {item.children && (
                  <ul className={styles.itemList}>
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <a href="#" className={styles.linkItem}>
                          <div className={styles.imgContainer}>
                            <img src={child.icon} alt={child.title} />
                          </div>
                          <div className={styles.linkText}>
                            <span>{child.title}</span>
                            <span>{child.desc}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopMenuItems;
