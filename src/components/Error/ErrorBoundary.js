import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo })
  }

  render() {
    const { errorInfo, error } = this.state
    const { children } = this.props

    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>資料載入出現問題請稍後再嘗試</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ErrorBoundary
