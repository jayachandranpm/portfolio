'use strict';

(() => {
  const host = document.getElementById('ant-trail');
  const canvas = document.getElementById('ant-trail-canvas');
  const position = document.getElementById('ant-position');
  const ant = document.getElementById('walking-ant');
  const toggle = document.getElementById('trail-motion-toggle');
  if (!host || !canvas || !position || !ant || !toggle) return;

  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const legs = [...ant.querySelectorAll('[data-leg]')];
  const core = ant.querySelector('.ant-core');
  const antennaLeft = ant.querySelector('.ant-antenna-left');
  const antennaRight = ant.querySelector('.ant-antenna-right');
  const scent = document.getElementById('scent-trail');
  const namespace = 'http://www.w3.org/2000/svg';
  const lifetime = 2700;
  const dots = Array.from({length:28}, () => {
    const node = document.createElementNS(namespace, 'circle');
    node.setAttribute('r','1.35');
    node.setAttribute('opacity','0');
    scent.append(node);
    return {node, born:0};
  });
  const anchors = [[43,54,24,39,13,23],[41,62,23,61,9,73],[43,71,22,91,12,108],[57,54,76,39,87,23],[59,62,77,61,91,73],[57,71,78,91,88,108]];
  const tripod = [0,Math.PI,0,Math.PI,0,Math.PI];
  const clamp = value => Math.max(0,Math.min(1,value));
  let saved;
  try { saved = sessionStorage.getItem('anttrail.trail-motion'); } catch (_) { /* Storage is optional. */ }
  let paused = media.matches || saved === 'paused';
  let width=innerWidth, height=innerHeight, mobile=width<=820, maxScroll=1;
  let current=0, target=0, angle=180, phase=0, frame=0, previousTime=0;
  let dotIndex=0, travelled=0, travelling=false;

  function point(progress) {
    return mobile
      ? {x:width-20+Math.sin(progress*Math.PI*4)*2,y:95+progress*Math.max(100,height-205)}
      : {x:width-25+Math.sin(progress*Math.PI*4)*3.5,y:125+progress*Math.max(100,height-245)};
  }
  function length() { return mobile ? Math.max(100,height-205) : Math.max(100,height-245); }
  function clearTrail() {
    dots.forEach(dot => {dot.born=0;dot.node.setAttribute('opacity','0');});
    travelled=0;
  }
  function restLegs() {
    legs.forEach((leg,i) => {
      const [hx,hy,kx,ky,fx,fy]=anchors[i];
      leg.setAttribute('d',`M${hx} ${hy} Q${(hx+kx)/2} ${(hy+ky)/2} ${kx} ${ky} L${fx} ${fy}`);
    });
    core.removeAttribute('transform');
    antennaLeft.removeAttribute('transform');
    antennaRight.removeAttribute('transform');
  }
  function walkLegs(dt) {
    phase += dt*27;
    legs.forEach((leg,i) => {
      const [hx,hy,kx,ky,fx,fy]=anchors[i];
      const p=phase+tripod[i], stride=Math.cos(p)*5.8;
      const lift=Math.max(0,Math.sin(p))*2.4*(i<3?1:-1);
      leg.setAttribute('d',`M${hx} ${hy} Q${(hx+kx)/2} ${(hy+ky)/2+stride*.2} ${kx+lift*.4} ${ky+stride*.35} L${fx+lift} ${fy+stride}`);
    });
    core.setAttribute('transform',`translate(0 ${(Math.sin(phase*2)*.45).toFixed(2)})`);
    antennaLeft.setAttribute('transform',`rotate(${(Math.sin(phase*.35)*3).toFixed(2)} 41 26)`);
    antennaRight.setAttribute('transform',`rotate(${(Math.sin(phase*.35+1)*3).toFixed(2)} 59 26)`);
  }
  function paint() {
    const p=point(current);
    position.setAttribute('transform',`translate(${p.x.toFixed(2)} ${p.y.toFixed(2)}) rotate(${angle.toFixed(2)})`);
  }
  function schedule() {
    if (!frame && !paused && !document.hidden) frame=requestAnimationFrame(tick);
  }
  function tick(now) {
    frame=0;
    if(paused || document.hidden) {previousTime=0;return;}
    const dt=Math.min((now-(previousTime||now-16))/1000,.04);
    previousTime=now;
    const distance=(target-current)*length();
    const moving=Math.abs(distance)>.35;
    if(moving) {
      const before=point(current);
      const speed=mobile?105:145;
      current=clamp(current+Math.sign(distance)*Math.min(Math.abs(distance),speed*dt)/length());
      const after=point(current);
      const desired=Math.atan2(after.y-before.y,after.x-before.x)*180/Math.PI+90;
      const turn=((desired-angle+540)%360)-180;
      angle+=Math.sign(turn)*Math.min(Math.abs(turn),dt*560);
      walkLegs(dt);
      travelled+=Math.hypot(after.x-before.x,after.y-before.y);
      if(travelled>=8) {
        const dot=dots[dotIndex++%dots.length];
        dot.node.setAttribute('cx',before.x.toFixed(2));
        dot.node.setAttribute('cy',before.y.toFixed(2));
        dot.born=now;
        travelled=0;
      }
      paint();
    } else if(travelling) {restLegs();}
    travelling=moving;
    host.dataset.state=moving?'walking':'resting';
    let visibleDots=false;
    dots.forEach(dot=>{
      if(!dot.born)return;
      const opacity=Math.max(0,1-(now-dot.born)/lifetime)*.72;
      dot.node.setAttribute('opacity',opacity.toFixed(3));
      if(opacity===0) dot.born=0;
      else visibleDots=true;
    });
    if(moving || visibleDots) schedule();
    else {previousTime=0;host.dataset.state='idle';}
  }
  function setTarget(value, nudge=false) {
    target=clamp(value);
    if(nudge && Math.abs(target-current)<.025) target=clamp(target+(target>.82?-.11:.11));
    if(paused) {
      target=current;
      host.dataset.state='paused';
    } else schedule();
  }
  function updateToggle() {
    const label=paused?'Resume ant animation':'Pause ant animation';
    toggle.setAttribute('aria-label',label);
    toggle.setAttribute('aria-pressed',String(paused));
    toggle.title=label;
    toggle.querySelector('.motion-label').textContent=paused?'Resume trail':'Pause trail';
    host.dataset.state=paused?'paused':'idle';
  }
  function applyPause(value, persist=false) {
    paused=value;
    if(frame) cancelAnimationFrame(frame);
    frame=0;previousTime=0;
    target=current;
    restLegs();clearTrail();updateToggle();
    if(persist) {try {sessionStorage.setItem('anttrail.trail-motion',paused?'paused':'playing');} catch (_) { /* Keep the preference in memory. */ }}
    if(!paused)setTarget(current+(current>.85?-.12:.12));
  }
  function resize() {
    const nextMobile=innerWidth<=820;
    if(nextMobile!==mobile) clearTrail();
    width=innerWidth;height=innerHeight;mobile=nextMobile;
    maxScroll=Math.max(1,document.documentElement.scrollHeight-height);
    canvas.setAttribute('viewBox',`0 0 ${width} ${height}`);
    angle=180;
    ant.setAttribute('width',mobile?'30':'40');ant.setAttribute('height',mobile?'42':'56');
    ant.setAttribute('x',mobile?'-15':'-20');ant.setAttribute('y',mobile?'-21':'-28');
    paint();
  }
  function followControl(event) {
    if(event.type==='pointerover' && event.pointerType==='touch')return;
    const control=event.target.closest?.('[data-audience],[data-step],[data-agent],#next-step,a[href^="#"],summary');
    if(!control || control.closest('.ant-trail'))return;
    if(event.type==='pointerover' && control.contains(event.relatedTarget))return;
    const rect=control.getBoundingClientRect();
    const value=(rect.y+rect.height/2-(mobile?95:125))/length();
    setTarget(value,event.type==='click');
  }
  toggle.hidden=false;
  document.body.classList.add('has-ant-trail');
  resize();current=target=clamp(scrollY/maxScroll);paint();updateToggle();
  if(!paused)setTarget(clamp(current+.13));
  toggle.addEventListener('click',()=>applyPause(!paused,true));
  media.addEventListener('change',event=>applyPause(event.matches));
  addEventListener('scroll',()=>setTarget(scrollY/maxScroll),{passive:true});
  addEventListener('resize',resize,{passive:true});
  new ResizeObserver(()=>{maxScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight);}).observe(document.body);
  document.addEventListener('pointerover',followControl,{passive:true});
  document.addEventListener('focusin',followControl);
  document.addEventListener('click',followControl,{passive:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) {
      if(frame)cancelAnimationFrame(frame);
      frame=0;previousTime=0;clearTrail();restLegs();host.dataset.state=paused?'paused':'idle';
    } else setTarget(scrollY/maxScroll);
  });
})();
