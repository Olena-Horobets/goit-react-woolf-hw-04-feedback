import s from './Notification.module.css';
import emoji from 'emoji-db.json';

function Notification({ message }) {
  return (
    <div className={s.notification}>
      <p className={s.message}>{message}</p>
      <p className={s.emoji}>{emoji['no-feedback']}</p>
    </div>
  );
}

export default Notification;
