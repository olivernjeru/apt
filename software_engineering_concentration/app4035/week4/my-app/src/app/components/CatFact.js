"use client";

import { useState, useEffect } from "react";

const CatFact = () => {
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      console.log(data);
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <p style={{ color: "#555", marginBottom: "15px" }}>{fact || "Loading..."}</p>
      <button onClick={fetchFact} style={{ padding: "10px 15px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Get Another Fact
      </button>
    </div>
  );
};

export default CatFact;
