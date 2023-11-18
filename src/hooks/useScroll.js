import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';
// 监听window创建的滚动
// 问题：页面离开时，监听移除；别的页面也有监听，代码重复

export default function useScroll(elRef) {
  let el = window;
  const isReachBottom = ref(false);
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  //  addScrollEventListener执行频率太高，使用节流
  const addScrollEventListener = throttle(() => {
    // 滚动距离顶部的距离
    // scrollTop.value = document.documentElement.scrollTop;

    // 视口高度

    // const clientHeight = document.documentElement.clientHeight;
    // 元素内容的高度
    // const scrollHeight = document.documentElement.scrollHeight;

    // 到底部的时候 scrollTop+clientHeight>=scrollHeight
    // console.log(scrollTop, clientHeight, scrollHeight);

    if (el === window) {
      scrollTop.value = document.documentElement.scrollTop;
      clientHeight.value = document.documentElement.clientHeight;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      scrollTop.value = el.scrollTop;
      clientHeight.value = el.clientHeight;
      scrollHeight.value = el.scrollHeight;
    }

    if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
      console.log('到底部啦~');
      isReachBottom.value = true;
    }
  }, 100);
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener('scroll', addScrollEventListener);
  });
  onUnmounted(() => {
    el.removeEventListener('scroll', addScrollEventListener);
  });

  return { isReachBottom, scrollTop };
}
