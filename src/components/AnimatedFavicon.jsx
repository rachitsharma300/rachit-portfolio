import { useEffect } from 'react';

const AnimatedFavicon = () => {
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        let angle = 0;
        const colors = ['#3B82F6', '#9333EA', '#10B981', '#F59E0B']; // Blue, Purple, Green, Orange
        let colorIndex = 0;

        const drawFavicon = () => {
            // Clear canvas
            ctx.clearRect(0, 0, 32, 32);

            // Draw rotating circle background
            const gradient = ctx.createLinearGradient(0, 0, 32, 32);
            gradient.addColorStop(0, colors[colorIndex % colors.length]);
            gradient.addColorStop(1, colors[(colorIndex + 1) % colors.length]);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(16, 16, 14, 0, Math.PI * 2);
            ctx.fill();

            // Draw "R" letter
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Rotate the "R"
            ctx.save();
            ctx.translate(16, 16);
            ctx.rotate(angle);
            ctx.fillText('R', 0, 0);
            ctx.restore();

            // Update angle for rotation
            angle += 0.05;

            // Change color every 60 frames (about 1 second)
            if (Math.floor(angle * 10) % 60 === 0) {
                colorIndex++;
            }

            // Update favicon
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = canvas.toDataURL();
            document.getElementsByTagName('head')[0].appendChild(link);
        };

        // Animate at 60fps
        const interval = setInterval(drawFavicon, 1000 / 60);

        return () => clearInterval(interval);
    }, []);

    return null; // This component doesn't render anything
};

export default AnimatedFavicon;
