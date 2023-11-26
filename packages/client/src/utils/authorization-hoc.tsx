import React from 'react'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store'
import { connect } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { fetchUser } from '../store/slices/userSlices'

const mapStateToProps = (state: RootState) => state.user

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>
) => ({
  dispatchYourAction: () => dispatch(fetchUser()),
})

// HOC, который рендерит обёрнутый компонент только при авторизации пользователя
export function checkAuthRenderHOC<P = any>(
  WrappedComponent: React.ComponentType
): React.ComponentType<P> {
  class WithAuthorizationComponent extends React.Component<P> {
    constructor(props: P) {
      super(props)
    }

    componentDidMount() {
      // @ts-ignore
      this.props.dispatchYourAction()
    }

    render() {
      // @ts-ignore
      if (!this.props.isAuth) {
        return <Navigate to="/login" replace />
      }
      return <WrappedComponent {...this.props} />
    }
  }
  // @ts-ignore
  return connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
  )(WithAuthorizationComponent)
}
