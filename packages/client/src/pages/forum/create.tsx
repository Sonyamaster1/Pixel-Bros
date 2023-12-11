import { FC, useState } from 'react'
import { FooterButton, Form } from '../../components'
import { ButtonColors } from '../../components/button/pure-button/button.component'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired } from '../../utils/constants'
import { Textarea } from '../../components/textarea'
import { useNavigate } from 'react-router'
import { MainLayout } from '../../components'
import './styles/create.pcss'
import { checkAuthRenderHOC } from 'client/src/utils/authorization-hoc'
import { forumTransport } from '../../api/forum'
import { useAuth } from '../../hooks/use-auth'

export type TForumTopicCreateFormValue = {
  name: string
}

const defaultFormValue: TForumTopicCreateFormValue = {
  name: '',
}

export const ForumCreatePage: FC = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [pending, setPending] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  const handleCreate = async (data: TForumTopicCreateFormValue) => {
    setPending(true)

    await forumTransport
      .createTopic(data.name, {
        name: user.login ?? 'Elon Mask',
        avatarUrl: user.avatar ?? '',
      })
      .then(({ id }) => {
        reset(defaultFormValue) // Сбрасываем форму
        navigate(`/forum/${id}`) // Перенаправляем юзера на созданный топик
      })
      .catch(() => {
        setError('name', { message: 'Ошибка создания топика!' })
      })
      .finally(() => setPending(false))
  }

  const handleCancel = () => navigate('/forum')

  return (
    <MainLayout>
      <Form>
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            validate: {
              min: data => {
                if (data.length < 30) {
                  return 'The minimum length is 30 characters'
                }
              },
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Textarea
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder="Topic name"
              disabled={pending}
              error={errors?.name?.message}
            />
          )}
          name="name"
        />

        <div className="forum-create-actions">
          <FooterButton
            buttonType="button"
            title="Cancel"
            color={ButtonColors.ALERT}
            onClick={handleCancel}
          />
          <FooterButton
            buttonType="submit"
            title="Create"
            color={ButtonColors.SUCCESS}
            onClick={handleSubmit(handleCreate)}
          />
        </div>
      </Form>
    </MainLayout>
  )
}

export const WithAuthorizationForumCreatePage =
  checkAuthRenderHOC(ForumCreatePage)
