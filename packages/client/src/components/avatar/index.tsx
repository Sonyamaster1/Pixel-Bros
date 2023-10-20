import styles from './avatar.module.scss'

interface IAvatar {
  src: string
  onClick: any
}
export const Avatar = ({ src, onClick }: IAvatar): JSX.Element => {
  return (
    <>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src={`https://ya-praktikum.tech/api/v2/resources${src}`}
          alt="avatar"
        />
      </div>
      <input id="avatar" type="file" name="avatar" accept="image/*" />
      <button onClick={onClick}>Отправить</button>
    </>
  )
}
