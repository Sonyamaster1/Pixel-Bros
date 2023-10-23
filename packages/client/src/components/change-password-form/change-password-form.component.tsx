import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import { profileTransport } from '../../api/profile/profile.api'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

export type TChangePasswordFormValue = {
  oldPassword: string
  newPassword: string
  confirmPassword?: string
}

export type TPasswordValue = {
  oldPassword: string
  newPassword: string
}

const defaultFormValue: TChangePasswordFormValue = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}

export function ChangePasswordForm() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  const goToMainPage = () => navigate('/')

  const onSubmit = (data: TChangePasswordFormValue) => {
    const res = { ...data }
    profileTransport.handleChangePassword(data)
    delete res.confirmPassword
  }

  const newPassword = watch('newPassword')
  return (
    <Form>
      <EntityHeader title="Change Password" />
      <SingleCell height={48} />
      <Controller
        control={control}
        rules={{
          required: fieldRequired,
          pattern: {
            value: validationPatterns.password.regexp,
            message: validationPatterns.password.message,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Field
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputName="oldPassword"
            placeholder="OLd password"
            inputType="password"
            error={errors?.oldPassword?.message}
          />
        )}
        name="oldPassword"
      />
      <Controller
        control={control}
        name="newPassword"
        rules={{
          required: fieldRequired,
          pattern: {
            value: validationPatterns.password.regexp,
            message: validationPatterns.password.message,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Field
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputName="newPassword"
            placeholder="New password"
            inputType="password"
            error={errors?.newPassword?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: fieldRequired,
          validate: {
            isEqualToNew: data => {
              if (data !== newPassword) {
                return 'New password must be equal'
              }
            },
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Field
            value={value ?? ''}
            onChange={onChange}
            onBlur={onBlur}
            inputName="confirmPassword"
            placeholder="Repeat password"
            inputType="password"
            error={errors?.confirmPassword?.message}
          />
        )}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}>
        <FooterButton
          buttonType="submit"
          onClick={handleSubmit(onSubmit)}
          title="Change"
          color={ButtonColors.GREEN}
        />
        <FooterButton
          buttonType="button"
          onClick={goToMainPage}
          title="Go to Leader"
          color={ButtonColors.GREEN}
        />
      </div>
    </Form>
  )
}
