import React from 'react'
import styles from "./value.module.css"

const Value = () => {
  return (
    <section className="container">
      <h2 className={styles.head}>
        Check out our latest article
        <hr />
      </h2>
      <div className={styles.start}>
        <div className={styles.valueContent}>
          <img src="/public/disease.png" alt="disease" className={styles.doc} />
          <h3 className={styles.dep}>
            Disease detection, check <br /> up in the laboratory
          </h3>
          <p className={styles.let}>
            In this case, the role of the health <br /> laboratory is very
            important to do <br />a disease detection...
          </p>
          <button className={styles.bot}>Read more&#10144;</button>
        </div>
        <div className={styles.valueContent}>
          <img src="/public/herbal.png" alt="disease" className={styles.doc} />
          <h3 className={styles.dep}>
            Herbal medicines that are <br /> safe for consumption
          </h3>
          <p className={styles.let}>
            Herbal medicine is very widely used <br />
            at this time because of its very good <br /> for your health...
          </p>
          <button className={styles.bot}>Read more&#10144;</button>
        </div>
        <div className={styles.valueContent}>
          <img src="/public/natural.png" alt="disease" className={styles.doc} />
          <h3 className={styles.dep}>
            Natural care for healthy <br />
            facial skin
          </h3>
          <p className={styles.let}>
            A healthy lifestyle should start from <br /> now and also for your
            skin health. <br /> There are some...
          </p>
          <button className={styles.bot}>Read more&#10144;</button>
        </div>
      </div>
      <button className={styles.nop}>View all</button>
    </section>
  );
}

export default Value
