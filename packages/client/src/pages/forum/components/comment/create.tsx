import { FC, useState } from 'react'
import { FooterButton, Form } from '../../../../components'
import { ButtonColors } from '../../../../components/button/pure-button/button.component'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired } from '../../../../utils/constants'
import { Textarea } from '../../../../components/textarea'
import './comment-create.pcss'
import { forumTransport } from '../../../../api/forum'
import { useAuth } from '../../../../hooks/use-auth'
import { TForumComment } from '../../types'

export type TForumCommentCreateFormValue = {
  comment: string
}

const defaultFormValue: TForumCommentCreateFormValue = {
  comment: '',
}

export const ForumCommentCreate: FC<{
  topicId: number
  updateComments: (comments: TForumComment[]) => void
}> = ({ topicId, updateComments }) => {
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

  const handleCreate = async (data: TForumCommentCreateFormValue) => {
    setPending(true)

    await forumTransport
      .createComment(topicId, data.comment, {
        name: user.login ?? 'Elon Mask',
        avatarUrl: user.avatar ?? '',
      })
      .then(comments => {
        updateComments(comments)
        reset(defaultFormValue) // Сбрасываем форму
      })
      .catch(() => {
        setError('comment', { message: 'Ошибка добавления комментария!' })
      })
      .finally(() => setPending(false))
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
              disabled={pending}
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
