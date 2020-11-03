import React from "react";
import "./styles.css";

function getAnimetionDelay() {
   const delay = Math.random().toFixed(3);
   return {
      animationDelay: `${1 - delay}s`,
      animationDuration: `${0.6 - delay}`,
   };
}

function Rain() {
   const drops = [];

   for (let i = 0; i < 25; i++) {
      const delay = getAnimetionDelay();
      drops.push(
         <div className="drop" key={i} style={delay}>
            <div className="stem" style={delay}></div>
            <div className="splat" style={delay}></div>
         </div>
      );
   }

   return <div className="Rain">{drops.map((drop) => drop)}</div>;
}

export default Rain;
