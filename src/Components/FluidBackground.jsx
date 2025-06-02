import { useEffect, useRef } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reaction-diffusion parameters for fluid-like mixing
    const gridWidth = Math.floor(canvas.width / 4);
    const gridHeight = Math.floor(canvas.height / 4);
    let grid = new Float32Array(gridWidth * gridHeight);
    let nextGrid = new Float32Array(gridWidth * gridHeight);

    // Initialize grid with some "ink" spots
    const initGrid = () => {
      for (let i = 0; i < gridWidth * gridHeight; i++) {
        grid[i] = 0;
      }
      // Add random "ink" spots
      for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * gridWidth);
        const y = Math.floor(Math.random() * gridHeight);
        const idx = y * gridWidth + x;
        grid[idx] = 1;
      }
    };

    // Color palette similar to the image
    const getColor = (value) => {
      if (value > 0.8) return 'rgba(0, 255, 255, 0.8)'; // Cyan
      if (value > 0.6) return 'rgba(0, 100, 255, 0.7)'; // Blue
      if (value > 0.4) return 'rgba(200, 0, 100, 0.6)'; // Magenta
      if (value > 0.2) return 'rgba(0, 200, 100, 0.5)'; // Green
      return 'rgba(0, 0, 0, 0.3)'; // Dark background
    };

    // Reaction-diffusion simulation for swirling effect
    const diffuse = () => {
      for (let y = 1; y < gridHeight - 1; y++) {
        for (let x = 1; x < gridWidth - 1; x++) {
          const idx = y * gridWidth + x;
          const laplace =
            grid[(y - 1) * gridWidth + x] +
            grid[(y + 1) * gridWidth + x] +
            grid[y * gridWidth + (x - 1)] +
            grid[y * gridWidth + (x + 1)] -
            4 * grid[idx];
          nextGrid[idx] = grid[idx] + 0.1 * laplace - 0.01 * grid[idx]; // Diffusion and decay
          nextGrid[idx] = Math.max(0, Math.min(1, nextGrid[idx])); // Clamp values
        }
      }
      [grid, nextGrid] = [nextGrid, grid]; // Swap grids
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slight fade for smooth blending
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the grid onto the canvas
      for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const idx = y * gridWidth + x;
          const value = grid[idx];
          ctx.fillStyle = getColor(value);
          ctx.fillRect(x * 4, y * 4, 4, 4); // Scale up the grid
        }
      }
    };

    const animate = () => {
      diffuse();
      draw();
      requestAnimationFrame(animate);
    };

    initGrid();
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize grid for new size
      const newGridWidth = Math.floor(canvas.width / 4);
      const newGridHeight = Math.floor(canvas.height / 4);
      grid = new Float32Array(newGridWidth * newGridHeight);
      nextGrid = new Float32Array(newGridWidth * newGridHeight);
      initGrid();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default FluidBackground;