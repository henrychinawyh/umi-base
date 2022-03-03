/**
 * @name 错误边界组件
 * @description 打印子组件树的JS错误，并渲染备用UI
 */

import type { ErrorInfo, ReactNode } from 'react';

import { Component } from 'react';

interface IProps {
  [keys: string]: any;
}

interface IState {
  hasError: boolean;
}
class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新state，保证下一次渲染时，能渲染出降级UI
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 上报或打印对应日志信息
    console.error(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // 渲染降级UI
      return <h1>Something went Wrong!</h1>;
    }

    // 渲染页面
    return this.props.children;
  }
}

export default ErrorBoundary;
