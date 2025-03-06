import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  const heart1 = confetti.shapeFromText({ text: "💘", scalar: 2 });
  const heart2 = confetti.shapeFromText({ text: "💖", scalar: 2 });
  const heart3 = confetti.shapeFromText({ text: "💝", scalar: 2 });
  const kiss = confetti.shapeFromText({ text: "😘", scalar: 2 });
  const love = confetti.shapeFromText({ text: "😍", scalar: 2 });

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.5 },
    shapes: [heart1, heart2, heart3, kiss, love],
    scalar: 2,
  });
};
