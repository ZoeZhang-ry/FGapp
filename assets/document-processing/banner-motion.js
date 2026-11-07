/* Presentation only. No route, data, click-handler or navigation-state mutations. */
const businessBannerSeen = new Set();
const businessBannerMotion = matchMedia('(prefers-reduced-motion: reduce)');
businessBannerMotion.addEventListener('change', event => {
 if (event.matches) document.querySelectorAll('.business-banner-decoration,.document-processing .dp-row').forEach(el=>el.getAnimations({subtree:true}).forEach(animation=>animation.cancel()));
});
const businessBannerArt = {
 projects: `<svg viewBox="0 0 150 78" fill="none" aria-hidden="true" focusable="false"><defs><linearGradient id="bb-track" x1="5" y1="65" x2="140" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#d8eaff"/><stop offset="1" stop-color="#619fff"/></linearGradient></defs><path class="bb-track" pathLength="1" d="M7 67C42 42 79 28 140 13" stroke="url(#bb-track)" stroke-width="2" stroke-linecap="round"/><g fill="url(#bb-track)" stroke="#fff" stroke-width="1.3"><circle class="bb-dot" cx="38" cy="48" r="4.5"/><circle class="bb-dot" cx="82" cy="29" r="5.5"/><circle class="bb-dot" cx="129" cy="16" r="6.5"/></g></svg>`,
 internal: `<svg viewBox="0 0 150 78" fill="none" aria-hidden="true" focusable="false"><defs><linearGradient id="bb-layer" x1="29" y1="17" x2="108" y2="71" gradientUnits="userSpaceOnUse"><stop stop-color="#d9eaff"/><stop offset="1" stop-color="#79afff"/></linearGradient></defs><path class="bb-layer" d="M24 51L70 35Q75 33 80 35L127 51Q132 54 127 56L80 73Q75 75 70 73L24 56Q19 54 24 51Z" fill="url(#bb-layer)" opacity=".35"/><path class="bb-layer" d="M24 35L70 19Q75 17 80 19L127 35Q132 38 127 40L80 57Q75 59 70 57L24 40Q19 38 24 35Z" fill="url(#bb-layer)" opacity=".55"/><path class="bb-layer" d="M24 19L70 3Q75 1 80 3L127 19Q132 22 127 24L80 41Q75 43 70 41L24 24Q19 22 24 19Z" fill="url(#bb-layer)" opacity=".8"/></svg>`,
 notices: `<svg viewBox="0 0 150 78" fill="none" aria-hidden="true" focusable="false"><defs><linearGradient id="bb-line" x1="10" y1="10" x2="105" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#dceaff"/><stop offset="1" stop-color="#659fff"/></linearGradient><linearGradient id="bb-wave" x1="117" y1="7" x2="137" y2="68" gradientUnits="userSpaceOnUse"><stop stop-color="#cee4ff" stop-opacity=".15"/><stop offset=".48" stop-color="#89baff" stop-opacity=".8"/><stop offset="1" stop-color="#dceaff" stop-opacity=".1"/></linearGradient></defs><g stroke="url(#bb-line)" stroke-width="8" stroke-linecap="round"><path class="bb-line" d="M13 20H91"/><path class="bb-line" d="M13 38H70"/><path class="bb-line" d="M13 56H48"/></g><g class="bb-wave" stroke="url(#bb-wave)" stroke-width="5" stroke-linecap="round"><path d="M109 15Q139 37 109 59"/><path d="M120 7Q158 37 120 68"/></g></svg>`
};
function businessBannerDecoration(domain) {
 const art = domain === 'docs' ? '<img src="assets/document-processing/bird.svg" alt="" aria-hidden="true">' : businessBannerArt[domain];
 return `<span class="dp-bird business-banner-decoration" aria-hidden="true" data-decoration="${domain}">${art || ''}</span>`;
}
function businessBannerEnter(domain) {
 const root = document.querySelector('#fusionLayer.document-processing');
 if (!root || businessBannerSeen.has(domain)) return;
 businessBannerSeen.add(domain);
 if (businessBannerMotion.matches) return;
 const animate = (element, frames, duration, delay = 0) => element?.animate(frames, {duration, delay, easing:'cubic-bezier(.2,.7,.25,1)', fill:'backwards'});
 const art = root.querySelector('.business-banner-decoration');
 if (domain === 'docs') animate(art.querySelector('img'), [{opacity:.5,transform:'translate(-6px,6px)'},{opacity:1,transform:'none'}],700);
 if (domain === 'projects') {
  animate(art.querySelector('.bb-track'), [{strokeDasharray:'1',strokeDashoffset:1},{strokeDasharray:'1',strokeDashoffset:0}],900);
  art.querySelectorAll('.bb-dot').forEach((el,i)=>animate(el,[{opacity:0},{opacity:1}],300,150+i*225));
 }
 if (domain === 'internal') art.querySelectorAll('.bb-layer').forEach((el,i)=>{
  const opacity=el.getAttribute('opacity');
  animate(el,[{opacity:0,transform:`translate(${i%2?'-':'+'}6px,6px)`},{opacity,transform:'none'}],560,i*120);
 });
 if (domain === 'notices') {
  art.querySelectorAll('.bb-line').forEach((el,i)=>animate(el,[{opacity:0,transform:'translateX(-3px)'},{opacity:1,transform:'none'}],450,i*150));
  animate(art.querySelector('.bb-wave'),[{opacity:0},{opacity:1}],450,450);
 }
 root.querySelectorAll('.dp-row').forEach(el=>animate(el,[{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],240));
}
