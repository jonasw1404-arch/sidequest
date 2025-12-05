/* Vollbild und Hintergrundbild */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: black;
  background-image: url('hintergrund.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  color: white;
}

/* Start-Rechteck */
#startBox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.7);
  padding: 40px 60px;
  text-align: center;
  border-radius: 10px;
  z-index: 100; /* immer oben */
}

#startBox h1 {
  margin-bottom: 20px;
}

#startBox button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
}

/* Missions-Rechtecke */
#missionContainer {
  gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1200px;
  z-index: 50; /* unter Start-Rechteck */
  display: flex;   /* wird per JS sichtbar */
  flex-wrap: wrap;
  justify-content: center;
}

.missionBox {
  flex: 1;
  min-width: 250px;
  background-color: rgba(0,0,0,0.7);
  padding: 20px;
  border-radius: 10px;
}

.missionBox h2 {
  margin-top: 0;
}

/* Rätsel-Rechtecke */
#raetselContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 90%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.raetselBox {
  background-color: rgba(50,50,50,0.8);
  padding: 20px;
  border-radius: 10px;
}

.raetselBox input {
  width: 80px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
  font-size: 16px;
}

.raetselBox button {
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.resultText {
  margin-top: 10px;
  font-weight: bold;
}
