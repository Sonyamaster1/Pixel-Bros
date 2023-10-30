import { FC } from 'react'
import { FooterButton, Form } from '../../components'
import { ButtonColors } from '../../components/button/button.component'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired } from '../../utils/constants'
import { Textarea } from '../../components/textarea'
import { useNavigate } from 'react-router'
import { MainLayout } from '../../components'
import './styles/create.pcss'

export type TForumTopicCreateFormValue = {
  name: string
}

const defaultFormValue: TForumTopicCreateFormValue = {
  name: '',
}

export const ForumCreatePage: FC = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  const handleCreate = (data: TForumTopicCreateFormValue) => {
    console.log(data.name) // TODO: Отправляем запрос на создание
    navigate('/forum') // Перенаправляем юзера на листинг топиков
  }

  const handleCancel = () => {
    navigate('/forum')
  }

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
              error={errors?.name?.message}
            />
          )}
          name="name"
        />

        <div className="forum-create-actions">
          <FooterButton
            buttonType="button"
            title="Cancel"
            color={ButtonColors.RED}
            onClick={handleCancel}
          />
          <FooterButton
            buttonType="submit"
            title="Create"
            color={ButtonColors.GREEN}
            onClick={handleSubmit(handleCreate)}
          />
        </div>
      </Form>
    </MainLayout>
  )
}
