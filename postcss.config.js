import pxtovw from 'postcss-px-to-viewport';

const loader_pxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw',
});

export default loader_pxtovw;
