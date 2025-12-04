import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const threejsContainerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Three.js Animation
  useEffect(() => {
    if (!threejsContainerRef.current) return;

    const container = threejsContainerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xe50914, 1.5, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xe50914, 1.2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.8, 100);
    pointLight3.position.set(0, 0, 10);
    scene.add(pointLight3);

    // Particles - More particles for hero
    const particleCount = 300;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      const color = new THREE.Color();
      if (Math.random() > 0.5) {
        color.setHex(0xe50914); // Red
      } else {
        color.setHex(0xffffff); // White
      }
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 0.15 + 0.05;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const shapeCount = 8;

    for (let i = 0; i < shapeCount; i++) {
      let geometry: THREE.BufferGeometry;
      const rand = Math.random();
      
      if (rand < 0.33) {
        geometry = new THREE.TetrahedronGeometry(0.3, 0);
      } else if (rand < 0.66) {
        geometry = new THREE.OctahedronGeometry(0.3, 0);
      } else {
        geometry = new THREE.IcosahedronGeometry(0.3, 0);
      }

      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xe50914 : 0xffffff,
        emissive: i % 2 === 0 ? 0xe50914 : 0xffffff,
        emissiveIntensity: 0.3,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.4
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(shape);
      shapes.push(shape);
    }

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Rotate particles
      particleSystem.rotation.y = time * 0.05;
      particleSystem.rotation.x = time * 0.03;

      // Animate particles
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time * 0.5 + i) * 0.02;
        positions[i3] += Math.cos(time * 0.3 + i) * 0.01;
      }
      particles.attributes.position.needsUpdate = true;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(time + index) * 0.02;
        shape.position.x += Math.cos(time * 0.5 + index) * 0.01;
      });

      // Animate lights
      pointLight1.position.x = Math.sin(time) * 8;
      pointLight1.position.y = Math.cos(time) * 8;
      pointLight2.position.x = Math.cos(time) * -8;
      pointLight2.position.y = Math.sin(time) * -8;
      pointLight3.intensity = 0.8 + Math.sin(time * 2) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!threejsContainerRef.current || !rendererRef.current) return;
      const newWidth = threejsContainerRef.current.clientWidth || window.innerWidth;
      const newHeight = threejsContainerRef.current.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      scene.clear();
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !backgroundRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -heroRect.top / heroRect.height));
      
      // Effet parallax : le background se déplace plus lentement
      const parallaxOffset = scrollProgress * 50;
      backgroundRef.current.style.transform = `translateY(${parallaxOffset}px) scale(${1.1 + scrollProgress * 0.05})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero" aria-labelledby="hero-title">
      <div 
        ref={backgroundRef}
        className="hero-background" 
        style={{
          backgroundImage: 'url(/image/fredpri.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '38% 15%',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      ></div>
      <div ref={threejsContainerRef} className="hero-threejs" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-top-info">
          <span className="hero-label">MARIAGE</span>
          <div className="hero-stars">★★★★★</div>
        </div>
        <div className="hero-bottom-content">
          <h1 id="hero-title" className="hero-title">Frédéric & Priscille</h1>
          <p className="hero-subtitle">Célébrons notre amour ensemble</p>
          <div className="hero-date">27 DÉCEMBRE 2025</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

