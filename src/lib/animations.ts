export const snappySpring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
}

export const smoothSpring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
