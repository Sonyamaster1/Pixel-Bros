import { FC } from 'react'
import { MainLayout } from '../../components'
import './error.scss'

type Code = 500 | 404
type Props = {
  code: Code
}

const ERROR_MESSAGE: Record<Code, string> = {
  404: 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
  500: 'Oh no! Our spaghetti code is not working properly. We will be back soon!',
}

export const ErrorPage: FC<Props> = ({ code }) => {
  const message = ERROR_MESSAGE[code]

  return (
    <MainLayout>
      <div className="error">
        <div className="error-code">{code}</div>
        <div className="error-message">{message}</div>
      </div>
    </MainLayout>
  )
}
