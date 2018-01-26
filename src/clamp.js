/*
 * @Author: DuBilin
 * @Email: wb-dbl257323@alibaba-inc.com
 * @Date: 2018-01-25 23:20:59
 * @Last Modified by: Du Bilin
 * @Last Modified time: 2018-01-26 09:38:33
 */

/**
 * @param {HTMLElement} element dom元素
 * @param {Object} options 参数配置
 */
export default function clamp(element, options) {
  const originalText = element.innerHTML; // 源文本
  let isOver = false; // 是否超出
  let operatorChar = ''; // 操作中的字符，每次会去切割

  // 获取行高
  function getLineHeight(elem) {
    let lh = getComputedStyle(elem).getPropertyValue('line-height');
    if (lh === 'normal') {
      lh = parseInt(getComputedStyle(elem).getPropertyValue('font-size'), 10) * 1.2;
    }
    return parseInt(lh, 10);
  }

  // 根据行高获取元素最大限制的高度
  function getMaxHeight(clmp) {
    const lineHeight = getLineHeight(element);
    return lineHeight * clmp;
  }

  function getLastChild(elem) {
    return elem.lastChild;
  }

  function truncate(target, maxHeight) {
    if (!maxHeight) return '';

    if (!operatorChar) {
      operatorChar = target.nodeValue;
      if (operatorChar.length === 0) {
        return '';
      }
    }

    if (operatorChar.length > 1) {
      operatorChar = operatorChar.substring(0, operatorChar.length - 1);
      target.nodeValue = operatorChar + options.ellipsisChar;
    }

    if (operatorChar) {
      // 当高度符合，则停止递归
      if (element.clientHeight <= maxHeight) {
        return element.innerHTML;
      }
    }
    // 递归切割最后一个字符
    return truncate(target, maxHeight);
  }

  let clampedText;
  const height = getMaxHeight(options.line);
  if (height < element.clientHeight) {
    isOver = true;
    clampedText = truncate(getLastChild(element), height);
  }

  return {
    original: originalText,
    clamped: clampedText,
    isOver,
  };
}
