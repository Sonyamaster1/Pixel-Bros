import { FC } from 'react'
import { FooterButton, Form } from '../../../../components'
import { ButtonColors } from '../../../../components/button/pure-button/button.component'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired } from '../../../../utils/constants'
import { Textarea } from '../../../../components/textarea'
import './comment-create.pcss'

export type TForumCommentCreateFormValue = {
  comment: string
}

const defaultFormValue: TForumCommentCreateFormValue = {
  comment: '',
}

export const ForumCommentCreate: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  const handleCreate = (data: TForumCommentCreateFormValue) => {
    console.log(data.comment) // TODO: Отправляем запрос на создание
  }

  return (
    <section className="comment-create">
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
              placeholder="Your comment"
              error={errors?.comment?.message}
            />
          )}
          name="comment"
        />

        <FooterButton
          buttonType="submit"
          title="Send"
          color={ButtonColors.GREEN}
          onClick={handleSubmit(handleCreate)}
        />
      </Form>
    </section>
  )
}
