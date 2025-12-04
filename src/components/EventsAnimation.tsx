import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons';
import * as THREE from 'three';

const EventsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = 400; // Fixed height for Three.js canvas

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0b0b);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0b0b0b, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xe50914, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xe50914, 0.8, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Particles
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color(0xe50914);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Netflix Logo 3D
    const logoGeometry = new THREE.BoxGeometry(1, 1, 0.2);
    const logoMaterial = new THREE.MeshStandardMaterial({
      color: 0xe50914,
      emissive: 0xe50914,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });
    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    logoMesh.position.set(-2, 1.5, 0);
    scene.add(logoMesh);

    // LOVE Text - Using planes for letters
    const letters = ['L', 'O', 'V', 'E'];
    const letterMeshes: THREE.Mesh[] = [];
    
    letters.forEach((letter, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (!context) return;
      
      canvas.width = 256;
      canvas.height = 256;
      context.fillStyle = '#ffffff';
      context.font = 'Bold 200px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(letter, 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      const letterMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        emissive: 0xffffff,
        emissiveIntensity: 0.3
      });
      const letterGeometry = new THREE.PlaneGeometry(0.8, 0.8);
      const letterMesh = new THREE.Mesh(letterGeometry, letterMaterial);
      letterMesh.position.set(-1.2 + index * 0.6, 0, 0);
      scene.add(letterMesh);
      letterMeshes.push(letterMesh);
    });

    // Stars
    const starMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const starGeometry = new THREE.TetrahedronGeometry(0.15, 0);
      const starMaterial = new THREE.MeshStandardMaterial({
        color: 0xe50914,
        emissive: 0xe50914,
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.3
      });
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(-1 + i * 0.5, -1.5, 0);
      scene.add(star);
      starMeshes.push(star);
    }

    // Animation
    const clock = new THREE.Clock();
    let time = 0;

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time = clock.getElapsedTime();

      // Rotate particles
      particleSystem.rotation.y = time * 0.1;
      particleSystem.rotation.x = time * 0.05;

      // Animate particles
      const positions = particles.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i) * 0.01;
      }
      particles.attributes.position.needsUpdate = true;

      // Animate logo
      logoMesh.rotation.y = Math.sin(time) * 0.3;
      logoMesh.rotation.x = Math.cos(time * 0.5) * 0.2;
      logoMesh.scale.setScalar(1 + Math.sin(time * 2) * 0.1);

      // Animate letters
      letterMeshes.forEach((mesh, index) => {
        mesh.rotation.y = Math.sin(time + index) * 0.2;
        mesh.position.y = Math.sin(time * 2 + index) * 0.1;
      });

      // Animate stars
      starMeshes.forEach((star, index) => {
        star.rotation.x = time * 0.5;
        star.rotation.y = time * 0.3;
        star.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.2);
      });

      // Animate lights
      pointLight1.position.x = Math.sin(time) * 5;
      pointLight1.position.y = Math.cos(time) * 5;
      pointLight2.position.x = Math.cos(time) * -5;
      pointLight2.position.y = Math.sin(time) * -5;

      renderer.render(scene, camera);
    };

    // Start animation
    animate();
    setIsVisible(true);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const newWidth = containerRef.current.clientWidth || window.innerWidth;
      const newHeight = 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      // Dispose geometries and materials
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

  return (
    <section 
      className="events-animation-section"
      aria-label="Animation événements"
    >
      <div className="events-animation-container">
        <div ref={containerRef} className="events-animation-threejs" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className={`events-animation-content ${isVisible ? 'visible' : ''}`}>
          {/* Logo Netflix et titre */}
          <div className="events-animation-header">
            <div className="netflix-logo">N</div>
            <h2 className="events-animation-title">LOVE</h2>
            <div className="events-animation-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>

          {/* Message d'invitation */}
          <div className="events-animation-message">
            <p>POUR HONORER CE MOMENT SACRÉ, NOUS VOUS INVITONS À VOUS</p>
            <p>PARER DE VOTRE PLUS BELLE ÉLÉGANCE. TENUE DE MARIAGE CHIC</p>
            <p>SOUHAITÉE – DÉLICATE, RAFFINÉE, À VOTRE IMAGE</p>
          </div>

          {/* Barre de progression Netflix-style */}
          <div className="events-animation-progress">
            <div className="events-animation-progress-bar"></div>
          </div>

          {/* Boutons interactifs Netflix-style */}
          <div className="events-animation-actions">
            <button className="events-animation-action-btn" aria-label="Ajouter à ma liste">
              <span className="action-icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span className="action-label">My List</span>
            </button>
            <button className="events-animation-action-btn" aria-label="Noter">
              <span className="action-icon">
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className="action-label">Rate</span>
            </button>
            <button className="events-animation-action-btn" aria-label="Partager">
              <span className="action-icon">
                <FontAwesomeIcon icon={faShare} />
              </span>
              <span className="action-label">Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAnimation;
