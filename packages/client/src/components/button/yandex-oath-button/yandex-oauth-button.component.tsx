import './yandex-oauth-button.style.pcss'
import IconYandex from '../../../assets/images/Yandex_icon.svg.png'

type TFooterButtonProps = {
  onClick: () => void
}

export function YandexOAuthButton({
  onClick,
}: TFooterButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={'yandex-oauth-button'}>
      <img src={IconYandex} className={'yandex-oauth-logo'} />
      <p>Войти с Яндекс ID</p>
    </button>
  )
}
