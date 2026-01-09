// Visual diagram of Cache, Service Workers, and Network Requests

const canvas = document.getElementById('diagram');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 1000;
canvas.height = 700;

// Colors
const bgColor = '#f8f9fa';
const userColor = '#4A90E2';
const swColor = '#E67E22';
const cacheColor = '#27AE60';
const networkColor = '#8E44AD';
const arrowColor = '#34495E';

// Fill background
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Helper function to draw boxes
function drawBox(x, y, width, height, color, label) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, x + width/2, y + height/2);
}

// Helper function to draw arrows
function drawArrow(fromX, fromY, toX, toY, label, color = arrowColor) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
  
  // Arrow head
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - 15 * Math.cos(angle - Math.PI/6), toY - 15 * Math.sin(angle - Math.PI/6));
  ctx.lineTo(toX - 15 * Math.cos(angle + Math.PI/6), toY - 15 * Math.sin(angle + Math.PI/6));
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  
  // Label
  if (label) {
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    ctx.fillStyle = '#2C3E50';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, midX, midY - 10);
  }
}

// Draw components
drawBox(50, 50, 150, 80, userColor, 'USER\n(Browser)');
drawBox(425, 180, 150, 100, swColor, 'SERVICE\nWORKER');
drawBox(425, 400, 150, 80, cacheColor, 'CACHE');
drawBox(800, 180, 150, 100, networkColor, 'NETWORK\n(Server)');

// Draw the flow with numbered steps
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 16px Arial';
ctx.textAlign = 'left';

// Step numbers and descriptions
const steps = [
  { num: '1', text: 'User requests /app.js', x: 220, y: 70 },
  { num: '2', text: 'SW intercepts request', x: 250, y: 130 },
  { num: '3a', text: 'Check cache', x: 450, y: 300 },
  { num: '3b', text: 'If not in cache', x: 610, y: 220 },
  { num: '4', text: 'Fetch from server', x: 630, y: 260 },
  { num: '5', text: 'Response', x: 630, y: 170 },
  { num: '6', text: 'Save to cache', x: 380, y: 350 },
  { num: '7', text: 'Return to user', x: 250, y: 160 }
];

// Draw arrows for flow
drawArrow(125, 130, 425, 220, '① Request', '#E74C3C');
drawArrow(500, 280, 500, 400, '③a Check', '#27AE60');
drawArrow(575, 230, 800, 230, '③b/④ Fetch', '#8E44AD');
drawArrow(875, 200, 575, 200, '⑤ Data', '#8E44AD');
drawArrow(500, 320, 500, 280, '⑥ Save', '#27AE60');
drawArrow(425, 250, 200, 110, '⑦ Response', '#E74C3C');

// Add detailed labels
ctx.font = '14px Arial';
ctx.fillStyle = '#7F8C8D';
ctx.textAlign = 'center';

ctx.fillText('Requests pages, images, scripts', 125, 150);
ctx.fillText('Decides: Cache or Network?', 500, 300);
ctx.fillText('Stores files for offline use', 500, 500);
ctx.fillText('Live data from server', 875, 300);

// Add title
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.fillText('How Service Workers, Cache, and Network Interact', 500, 30);

// Add strategy box
ctx.strokeStyle = '#E67E22';
ctx.lineWidth = 2;
ctx.setLineDash([5, 5]);
ctx.strokeRect(250, 550, 500, 120);
ctx.setLineDash([]);

ctx.fillStyle = '#E67E22';
ctx.font = 'bold 16px Arial';
ctx.fillText('Common Strategy: Cache First, Network Fallback', 500, 580);

ctx.fillStyle = '#34495E';
ctx.font = '14px Arial';
ctx.textAlign = 'left';
ctx.fillText('1. Service Worker checks cache', 270, 610);
ctx.fillText('2. If found → Return instantly (fast!)', 270, 635);
ctx.fillText('3. If not found → Fetch from network → Save to cache', 270, 660);