import React from 'react'

export default function withErrorHandler(
  errorCallback,
  FallbackComponent,
  Component
) {
  class WithErrorHandler extends React.Component {
    constructor() {
      super()

      // Construct the initial state
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      }
    }

    componentDidCatch(error, info) {
      // Update state if error happens
      this.setState({ hasError: true, error, errorInfo: info })

      // Report errors
      errorCallback(error, info, this.props)
    }

    render() {
      const { hasError } = this.state
      // if state contains error we render fallback component
      if (hasError) {
        const { error, errorInfo } = this.state
        return (
          <FallbackComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
            error={error}
            errorInfo={errorInfo}
          />
        )
      }

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Component {...this.props} />
    }
  }
  WithErrorHandler.displayName = `withErrorHandler(${Component.displayName})`
  return WithErrorHandler
}
