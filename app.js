* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

#panel {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    background: white;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 1000;
    font-family: Arial, sans-serif;
}

#panel h3 {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
}

#panel p {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 10px;
}

#locate-btn {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;
}

/* Rota kutusunun mobilde düzgün görünmesi için */
.leaflet-routing-container {
    background: white;
    padding: 10px;
    border-radius: 8px;
    max-height: 150px;
    overflow-y: auto;
    font-size: 0.85rem;
}
