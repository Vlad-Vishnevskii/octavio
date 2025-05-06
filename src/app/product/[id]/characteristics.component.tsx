import { CharacteristicsItem } from './types';
import styles from './product-page.module.scss';

interface Props {
  characteristics: CharacteristicsItem[];
}

export const ProductCharacteristics: React.FC<Props> = ({ characteristics }) => {
  return (
    <div className={styles.characteristics}>
      {characteristics.map((spec, index) => {
        if ('title' in spec) {
          return (
            <div key={index}>
              <div className={styles.characteristics_title}>{spec.title}</div>
              <ul className={styles.characteristics_list}>
                {spec.items.map((item, i) => (
                  <li className={styles.characteristics_item} key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        } else if ('label' in spec) {
          return (
            <div key={index}>
              <span className={styles.characteristics_title}>{spec.label}:</span>
              <span className={styles.characteristics_stringItem}>{spec.value}</span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
