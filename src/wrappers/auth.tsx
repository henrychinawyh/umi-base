/**
 * @name 权限校验
 */

import { useLayoutEffect, useRef } from 'react';

import ErrorBoundary from './ErrorBoundary';
import { Redirect } from 'umi';

const Auth = (props: any) => {
  const auth = useRef<any>(true);

  // 在页面渲染完成之前执行，避免权限获取过程中出现闪屏
  useLayoutEffect(() => {
    // 这里处理成都有权限
    auth.current = true;
  }, []);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return <ErrorBoundary>{props.children}</ErrorBoundary>;
};

export default Auth;
