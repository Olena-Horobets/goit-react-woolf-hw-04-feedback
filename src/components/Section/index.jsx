import s from './Section.module.css';

function Section({ styleClass, title = '', children = null }) {
  return (
    <div className={s[styleClass]}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;
