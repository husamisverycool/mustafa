// Scroll-velocity smoke behind the black grounds, after Ten Years Away's
// background: "a GLSL shader plane that responds to scroll velocity … fBm noise …
// At rest … loose clusters, like smoke. Scroll faster, and they stretch into thin,
// directional, elongated streaks." Three.js as on Getty "Sculpting Harmony" and
// Ten Years Away. Peak alpha 0.25 (three-vignette-background noiseAlpha /
// Paper grain-gradient noise). DPR capped at 1.5 (Ten Years Away).
import * as THREE from 'three';
import { reducedMotion } from './util.js';

const frag = /* glsl */ `
precision highp float;
uniform float uTime;
uniform float uVel;
uniform float uScroll;
uniform vec2 uRes;
varying vec2 vUv;

float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
  vec2 u = f*f*(3.-2.*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.-u.x) + (d-b)*u.x*u.y;
}
float fbm(vec2 p){
  float v = 0., a = .5;
  for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.02 + vec2(17.1, 9.2); a *= .5; }
  return v;
}
void main(){
  vec2 p = vUv * vec2(uRes.x/uRes.y, 1.) * 2.2;
  float s = clamp(abs(uVel) * 0.04, 0., 1.);
  // stretch along the scroll axis as velocity rises
  p.x *= 1. + s * 3.;
  p.y /= 1. + s * 6.;
  p.y += uScroll * 0.0006;
  float n = fbm(p + vec2(uTime*.02, -uTime*.015));
  float m = fbm(p*1.7 - vec2(uTime*.01, 0.) + n);
  float cloud = smoothstep(.55, .85, mix(n, m, .5));
  gl_FragColor = vec4(vec3(1.), cloud * .25);
}`;

const vert = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`;

export function initSmoke(canvas, getScroll) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch (e) { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  const uniforms = {
    uTime: { value: 0 }, uVel: { value: 0 }, uScroll: { value: 0 },
    uRes: { value: new THREE.Vector2(innerWidth, innerHeight) },
  };
  const mat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, depthWrite: false });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  function resize() {
    // render at half resolution: it's soft smoke
    renderer.setSize(innerWidth, innerHeight, false);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    uniforms.uRes.value.set(innerWidth, innerHeight);
  }
  resize();
  addEventListener('resize', resize);

  const still = reducedMotion();
  let vel = 0;
  const t0 = performance.now();
  function frame() {
    if (!document.hidden) {
      const { scroll, velocity } = getScroll();
      vel += (velocity - vel) * 0.1; // lerp 0.1 (Lenis default)
      uniforms.uVel.value = still ? 0 : vel;
      uniforms.uScroll.value = scroll;
      uniforms.uTime.value = still ? 0 : (performance.now() - t0) / 1000;
      renderer.render(scene, camera);
    }
    if (!still) requestAnimationFrame(frame);
  }
  frame();
  if (still) addEventListener('scroll', () => requestAnimationFrame(() => { uniforms.uScroll.value = getScroll().scroll; renderer.render(scene, camera); }), { passive: true });
}
