import { ChangeEvent } from 'react'
import styles from './avatar.module.scss'

interface IAvatar {
  src: string
  handleOnChangeField: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Avatar = ({ src, handleOnChangeField }: IAvatar): JSX.Element => {
  return (
    <>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src={`https://ya-praktikum.tech/api/v2/resources${src}`}
          alt="avatar"
        />
      </div>
      <input
        onChange={handleOnChangeField}
        id="avatar"
        type="file"
        name="avatar"
        accept="image/*"
      />
    </>
  )
}
