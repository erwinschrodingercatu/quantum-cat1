function openBox() {
    const atomState = Math.random() < 0.5 ? "decayed" : "not decayed";
    const catState = atomState === "decayed" ? "Dead" : "Alive";
    document.getElementById("result").innerText = `The cat is currently: ${catState}`;
}
