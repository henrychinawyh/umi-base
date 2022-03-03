/**
 *  @name px to rem
 * @param options {designWidth}
 */
export const px2rem = (options?: { designWidth?: number }) => {
  const {
    designWidth = 750, //设计稿的大小，移动端标准是750，企业微信侧边栏360
  } = options || {};
  const pixelScale = 50; //当前比例px/rem倍数，设置比例一般可为100,比例倍数不低于12，与config中postcss配置保持一致

  const docEl: HTMLElement = document.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  //根据设计稿设置HTML字体大小
  const recalc = function () {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    // docEl.style.fontSize = `${pixelScale * (clientWidth / designWidth)}px`;
    if (clientWidth >= designWidth) {
      docEl.style.fontSize = `${pixelScale}px`;
    } else {
      docEl.style.fontSize = `${pixelScale * (clientWidth / designWidth)}px`;
    }
  };

  document?.addEventListener('DOMContentLoaded', recalc, false);
  window?.addEventListener(resizeEvt, recalc, false);
};

export default px2rem;
