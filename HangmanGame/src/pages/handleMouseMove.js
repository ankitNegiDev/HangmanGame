const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.className = "dot"; // shorthand
        circle.style.cssText = `
            left: ${x + (Math.random() * 5 - 2.5)}px;
            top: ${y + (Math.random() * 5 - 2.5)}px;
            background-color: ${color};
        `;

        document.body.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 700);
    }
};

export default handleMouseMove;