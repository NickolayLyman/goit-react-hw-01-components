import PropTypes from 'prop-types';
import style from './FriendItem.module.css';

const FriendItem = ({ props }) => {
  const { avatar, name, isOnline } = props;
  return (
    <li className={style.item}>
      <span className={isOnline ? style.online : style.offline}>
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  props: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendItem;
