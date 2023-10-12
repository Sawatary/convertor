import styles from "./SectionHeading.module.scss";

const SectionHeading = ({ title }) => {
  return (
    <div className={styles.name}>
      <svg
        width="6"
        height="30"
        viewBox="0 0 6 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="30" rx="3" fill="#8A33FD" />
      </svg>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;
