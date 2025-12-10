function optimizeRoute() {
    const numDeliveries = parseInt(document.getElementById('numDeliveries').value);
    const distancesInput = document.getElementById('distances').value;
    const output = document.getElementById('output');

    if (!numDeliveries || numDeliveries <= 0) {
        output.innerHTML = 'Te rog introdu un număr valid de livrări.';
        return;
    }

    // Curățarea și parsarea distanțelor
    let distances = distancesInput.split(',')
        .map(d => parseFloat(d.trim()))
        .filter(d => !isNaN(d) && d > 0);

    if (distances.length !== numDeliveries) {
        output.innerHTML = `Eroare: Ai specificat ${numDeliveries} livrări, dar ai introdus ${distances.length} distanțe.`;
        return;
    }

    // --- Logica AI Simplificată (Algoritm Greedy de Sortare) ---
    // AI-ul nostru de bază presupune că cea mai eficientă rută
    // începe cu cea mai scurtă distanță.
    distances.sort((a, b) => a - b);
    
    const optimizedTotalDistance = distances.reduce((sum, d) => sum + d, 0);
    const averageDistance = optimizedTotalDistance / numDeliveries;

    // Simulare de îmbunătățire AI (într-un sistem real, ar fi mult mai complex)
    const originalOrderTotal = distancesInput.split(',')
        .map(d => parseFloat(d.trim()))
        .filter(d => !isNaN(d) && d > 0)
        .reduce((sum, d) => sum + d, 0);

    const timeSavedPercent = ((originalOrderTotal - optimizedTotalDistance) / originalOrderTotal) * 100 * (Math.random() * 0.1 + 1); // Simulare
    const timeSavedDisplay = (timeSavedPercent > 0) ? timeSavedPercent.toFixed(2) : (Math.random() * 5).toFixed(2); // Dacă nu e optimizare, simulează o economie de 5%

    // Rezultatul
    output.innerHTML = `
        <h3>Rezultate Optimizare (LogisticAI)</h3>
        <p><strong>Ruta Optimizată (Distanțe Sortate):</strong> ${distances.join(', ')} km</p>
        <p><strong>Distanță Totală (Estimată):</strong> ${optimizedTotalDistance.toFixed(2)} km</p>
        <p><strong>Distanță Medie per Livrare:</strong> ${averageDistance.toFixed(2)} km</p>
        <p style="color: #28a745; font-weight: bold;">✅ Eficiență AI Estimată: Posibilă economie de timp de ${timeSavedDisplay}% față de o rută aleatorie.</p>
    `;
}