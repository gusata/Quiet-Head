"use client";

import { useRef, useEffect } from "react";

export default function DriftBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let car = {
      x: width / 2,
      y: height / 2,
      moveAngle: Math.random() * Math.PI * 3, // direção inicial
      angle: 0,
      speed: 4
    };

    let angleTime = Math.random() * 1500;
    let angleSpeed = 0.01;
    let angleRange = 0.6;

    // Simulação de curva: controlando a taxa de mudança de direção
    let turnTime = 0;
    let turnSpeed = 0.019; // velocidade que a trajetória muda
    let turnAmplitude = 0.009; // quanto ele "vira" (controla a curvatura)

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);

    function drawParticles() {
      particles.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(200,200,200,${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function update() {
      // Atualiza o tempo de virada
      turnTime += turnSpeed;
      const turnOffset = Math.sin(turnTime) * turnAmplitude;

      // Aplica mudança de direção
      car.moveAngle += turnOffset;

      // Atualiza a posição do carro
      car.x += Math.cos(car.moveAngle) * car.speed;
      car.y += Math.sin(car.moveAngle) * car.speed;

      // Teleportar se sair da tela (wrap around)
      if (car.x < 0) car.x = width;
      if (car.x > width) car.x = 0;
      if (car.y < 0) car.y = height;
      if (car.y > height) car.y = 0;

      // Oscilação visual estilo drift
      angleTime += angleSpeed;
      const driftOffset = Math.sin(angleTime) * angleRange;
      car.angle = car.moveAngle + driftOffset;

      // Gerar fumaça atrás do carro
      const smokeX = car.x - Math.cos(car.moveAngle) * 20;
      const smokeY = car.y - Math.sin(car.moveAngle) * 20;
      particles.push({
        x: smokeX,
        y: smokeY,
        alpha: 0.5,
        size: 3 + Math.random() * 5
      });

      // Atualiza partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].alpha -= 0.01;
        particles[i].size += 0.2;
        if (particles[i].alpha <= 0) particles.splice(i, 1);
      }
    }

    function drawCar() {
      ctx.save();
      ctx.translate(car.x, car.y);
      ctx.rotate(car.angle);
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(-10, -5, 24, 12);
      ctx.restore();
    }

    function loop() {
      ctx.clearRect(0, 0, width, height);
      update();
      drawParticles();
      drawCar();
      requestAnimationFrame(loop);
    }

    loop();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="top-0 opacity-60 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
