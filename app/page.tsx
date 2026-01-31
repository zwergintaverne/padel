"use client";

import { useState, useEffect } from "react";

const warmUp = {
  title: "Aufwärmen (4–5 Minuten)",
  content:
    "**1. LOCKERES EINLAUFEN**: Stelle dich aufrecht hin und marschiere 2 Minuten auf der Stelle. Kreise dabei deine Arme vorwärts und rückwärts. Lockere deine Schultern, indem du sie nach oben zu den Ohren ziehst und wieder fallen lässt.\n\n" +
    "**2. DYNAMISCHE MOBILISATION**: \n" +
    "   • **Knieheben**: Hebe abwechselnd deine Knie so hoch wie möglich, 10x pro Seite\n" +
    "   • **Fersen zum Gesäß**: Lauf langsam auf der Stelle und berühre mit deinen Fersen dein Gesäß, 10x pro Seite\n" +
    "   • **Ausfallschritte mit Rotation**: Mache einen Ausfallschritt nach vorne und drehe dabei deinen Oberkörper zur vorderen Seite, 10x pro Seite\n\n" +
    "**3. RUMPFAKTIVIERUNG**: \n" +
    "   • **Unterarmstütz (Plank)**: Gehe in Bauchlage, stütze dich auf deine Unterarme und Zehenspitzen. Halte deinen Körper gerade wie ein Brett für 30 Sekunden\n" +
    "   • **Katze-Kuh**: Gehe in den Vierfüßlerstand (Hände unter Schultern, Knie unter Hüften). Mache einen runden Katzenbuckel, dann senke deinen Bauch Richtung Boden für einen Hohlkreuz-Effekt. 10 Wiederholungen\n\n" +
    "**4. PADEL-VORBEREITUNG**: \n" +
    "   Stelle dir vor, du hältst einen Padel-Schläger. Mache 1 Minute lang leichte Schatten-Schläge: Vorhand (Schlag mit der Handfläche nach außen) und Rückhand (Schlag mit der Handrücken nach außen). Beuge dabei leicht deine Knie.",
};

const plans = [
  {
    title: "Ganzkörper Kraft & Stabilität",
    content:
      "**KRAFTTEIL (12 Minuten)**\n\n" +
      "**1. BEINE & GESÄSS**:\n" +
      "• **Kniebeugen**: Stelle dich hüftbreit hin. Gehe langsam runter, als würdest du dich auf einen Stuhl setzen. Halte den Rücken gerade. 12x, 3 Runden\n" +
      "• **Ausfallschritte**: Mache mit einem Bein einen großen Schritt nach vorne. Gehe runter, bis beide Knie etwa 90 Grad gebeugt sind. Das hintere Knie berührt fast den Boden. 10x pro Seite, 3 Runden\n" +
      "• **Wadenheben**: Stelle dich auf eine Stufe oder einen festen Untergrund. Hebe deine Fersen so hoch wie möglich und senke sie langsam ab. 15x, 3 Runden\n\n" +
      "**2. RUMPF & CORE**:\n" +
      "• **Plank (Unterarmstütz)**: Bauchlage, auf Unterarmen und Zehen abstützen. Körper gerade halten. 45 Sekunden, 3 Runden\n" +
      "• **Russian Twists (russische Drehungen)**: Setze dich hin, lehne dich leicht zurück. Drehe deinen Oberkörper mit angewinkelten Armen von links nach rechts. 20x (10 pro Seite), 3 Runden\n" +
      "• **Beinheben**: Rückenlage, Hände unter dem Gesäß. Hebe beide gestreckten Beine langsam an und senke sie, ohne den Boden zu berühren. 12x, 3 Runden\n\n" +
      "**3. OBERKÖRPER**:\n" +
      "• **Liegestütze**: Auf den Händen und Zehen (oder Knien für einfachere Variante). Körper gerade, bis die Brust fast den Boden berührt. 10-15x, 3 Runden\n" +
      "• **Schulterdrücken**: Nimm zwei Wasserflaschen (oder leichte Gewichte). Hebe sie von den Schultern nach oben über den Kopf. 12x, 3 Runden\n" +
      "• **Ruderbewegung**: Beuge dich leicht vor. Ziehe die Wasserflaschen zu deinem Bauchnabel, als würdest du rudern. 12x, 3 Runden\n\n" +
      "**SCHLUSSDEHNUNG (3 Minuten)**\n" +
      "• **Vorbeuge im Stand**: Beine gestreckt, beuge dich langsam nach vorne und lass deinen Oberkörper hängen. 30 Sekunden\n" +
      "• **Hüftdehnung im Ausfallschritt**: Ausfallschrittposition, schiebe deine Hüfte nach vorne, bis du eine Dehnung spürst. 30 Sekunden pro Seite\n" +
      "• **Brustdehnung an der Wand**: Stelle dich seitlich zur Wand, lege deinen Arm dagegen und drehe deinen Körper weg. 30 Sekunden pro Seite\n" +
      "• **Rückenentspannung**: Leg dich auf den Rücken, ziehe beide Knie zur Brust und umarme sie. 60 Sekunden",
  },
  {
    title: "Unterkörper Power & Explosivität",
    content:
      "**KRAFTTEIL (13 Minuten)**\n\n" +
      "**1. EXPLOSIVE BEINE**:\n" +
      "• **Squat Jumps (Kniebeugen-Sprünge)**: Gehe in die Kniebeuge und springe dann so hoch wie möglich. Lande weich. 8x, 4 Runden\n" +
      "• **Ausfallschritt-Sprünge**: Ausfallschrittposition, springe hoch und wechsle in der Luft die Beine. Lande im Ausfallschritt der anderen Seite. 8x pro Seite, 3 Runden\n" +
      "• **Seitliche Hops**: Springe von einem Bein auf das andere, wie beim Seitwärtsspringen. 10x, 3 Runden\n\n" +
      "**2. STABILISATION**:\n" +
      "• **Einbeinige Kniebeugen**: Hebe ein Bein nach vorne. Gehe mit dem Standbein langsam in die Hocke. Halte dich notfalls fest. 8x pro Seite, 3 Runden\n" +
      "• **Wadenheben einbeinig**: Stelle dich auf ein Bein, hebe die Ferse hoch und senke sie. 12x pro Seite, 3 Runden\n\n" +
      "**3. PLYOMETRISCH (Sprungkraft)**:\n" +
      "• **Box Jumps**: Springe auf eine niedrige Stufe oder einen stabilen Gegenstand (alternativ: hohe Step-Ups). 6x, 3 Runden\n" +
      "• **Skater Jumps**: Springe seitlich von einem Bein auf das andere, wie beim Eisschnelllauf. 10x, 3 Runden\n\n" +
      "**SCHLUSSDEHNUNG (4 Minuten)**\n" +
      "• **Tiefe Hocke (Asian Squat)**: Gehe so tief in die Hocke wie möglich, Fersen am Boden. Halte dich notfalls fest. 60 Sekunden\n" +
      "• **Oberschenkeldehnung im Stehen**: Stelle dich auf ein Bein, ziehe die Ferse des anderen zum Gesäß. 30 Sekunden pro Seite\n" +
      "• **Hüftbeuger-Dehnung im Knien**: Knie dich hin, schiebe die Hüfte des vorderen Beins nach vorne. 30 Sekunden pro Seite\n" +
      "• **Waden dehnen an der Wand**: Stelle dich mit den Händen an die Wand, ein Bein nach hinten gestreckt, Ferse am Boden. 30 Sekunden pro Seite",
  },
  {
    title: "Rumpfkraft & Rotationsstärke",
    content:
      "**KRAFTTEIL (11 Minuten)**\n\n" +
      "**1. CORE-KOMPLEX**:\n" +
      "• **Side Plank (Seitstütz)**: Liege auf der Seite, stütze dich auf einem Unterarm und den Füßen. Hebe deine Hüfte an, Körper gerade. 30 Sekunden pro Seite, 3 Runden\n" +
      "• **Dead Bugs (tote Käfer)**: Rückenlage, Arme nach oben gestreckt, Beine angewinkelt. Strecke langsam einen Arm und das gegenüberliegende Bein aus. 12x pro Seite, 3 Runden\n" +
      "• **Hollow Hold (Hohlkörperhaltung)**: Rückenlage, hebe Arme und Beine leicht an, unterer Rücken bleibt am Boden. 20 Sekunden, 3 Runden\n\n" +
      "**2. ROTATIONSTRAINING**:\n" +
      "• **Medizinball Drehwürfe**: Halte einen Ball oder ein Kissen mit beiden Händen. Drehe dich schnell von einer Seite zur anderen (ohne loszulassen). 10x pro Seite, 4 Runden\n" +
      "• **Woodchoppers (Holzhacker)**: Halte ein Handtuch oder leichten Gegenstand mit beiden Händen. Führe eine diagonale Hackbewegung von oben links nach unten rechts aus. 12x pro Seite, 3 Runden\n\n" +
      "**3. ANTI-ROTATION**:\n" +
      "• **Pallof Press**: Binde ein Handtuch oder Gummiband an einen festen Punkt. Ziehe es auf Brusthöhe und drücke es vor dir aus, ohne dass dich der Widerstand dreht. 10x pro Seite, 3 Runden\n" +
      "• **Plank mit Armabhebung**: In der Plank-Position, hebe abwechselnd einen Arm nach vorne. 8x pro Seite, 3 Runden\n\n" +
      "**SCHLUSSDEHNUNG (4 Minuten)**\n" +
      "• **Sitzende Drehung**: Setze dich mit gestreckten Beinen hin. Stelle einen Fuß über das andere Knie und drehe dich zur gegenüberliegenden Seite. 30 Sekunden pro Seite\n" +
      "• **Rückenlage mit angewinkelten Beinen zur Seite**: Rückenlage, beide Knie zur Brust. Lasse sie kontrolliert zur Seite fallen. 30 Sekunden pro Seite\n" +
      "• **Katze-Kuh-Flow**: Im Vierfüßlerstand abwechselnd Buckel machen und durchhängen. 60 Sekunden\n" +
      "• **Kindeshaltung**: Knie dich hin, setze dich auf die Fersen und lege den Oberkörper auf den Oberschenkeln ab. Arme nach vorne gestreckt. 60 Sekunden",
  },
  {
    title: "Ganzkörper Ausdauer-Kraft",
    content:
      "**KRAFTTEIL (12 Minuten - Zirkeltraining)**\n" +
      "**Mach 3 Runden. Jede Übung 45 Sekunden, dann 15 Sekunden Pause:**\n\n" +
      "1. **BURPEES (modifiziert)**: Gehe in die Hocke, stütze die Hände auf, springe mit den Füßen nach hinten in die Plank. Springe zurück und stehe auf (ohne Sprung am Ende).\n" +
      "2. **MOUNTAIN CLIMBERS**: In der Plank-Position, ziehe abwechselnd deine Knie schnell zur Brust, wie beim Bergsteigen.\n" +
      "3. **PLANK SHOULDER TAPS**: In der Plank-Position, berühre abwechselnd mit einer Hand die gegenüberliegende Schulter.\n" +
      "4. **SQUAT TO PRESS**: Kniebeuge mit Wasserflaschen in den Händen. Beim Aufstehen drücke die Flaschen über deinen Kopf.\n" +
      "5. **RUSSIAN TWISTS**: Sitzend, leicht zurückgelehnt, drehe deinen Oberkörper mit einem Gegenstand in den Händen von Seite zu Seite.\n" +
      "6. **JUMPING JACKS**: Hampelmänner: Springe mit gespreizten Beinen und klatsche über dem Kopf zusammen.\n\n" +
      "**SCHLUSSDEHNUNG (3 Minuten)**\n" +
      "• **Dynamische Vorbeuge**: Stehe hüftbreit, beuge dich nach vorne und komme langsam wieder hoch. 30 Sekunden\n" +
      "• **Pigeon Stretch (Taube)**: Aus dem Vierfüßlerstand, bringe ein Knie nach vorne zur Hand, das andere Bein nach hinten gestreckt. 30 Sekunden pro Seite\n" +
      "• **Brustöffnung im Türrahmen**: Stelle dich in einen Türrahmen, lege die Unterarme an den Rahmen und lehne dich leicht nach vorne. 30 Sekunden\n" +
      "• **Beine an der Wand hochlegen**: Setze dich seitlich an eine Wand, drehe dich und lege beide Beine an der Wand hoch. Rücken am Boden. 60 Sekunden",
  },
  {
    title: "Padel-spezifische Kraft",
    content:
      "**KRAFTTEIL (14 Minuten)**\n\n" +
      "**1. BEINARBEIT**:\n" +
      "• **Side Shuffles (seitliches Trippeln)**: Leichte Kniebeuge, bewege dich seitlich hin und her, ohne die Füße zu kreuzen. 30 Sekunden, 3 Runden\n" +
      "• **Ladder Drills (Leiter-Übung, imaginär)**: Stell dir eine Leiter auf dem Boden vor. Trete schnell in jedes imaginäre Feld: vorwärts, seitlich, diagonal.\n" +
      "• **Schnelle Fußarbeit**: Stelle dich locker hin und wechsle schnell das Gewicht von einem Fuß auf den anderen, wie beim Warten auf den Ball.\n\n" +
      "**2. SCHLAGKRAFT**:\n" +
      "• **Band-Rotations**: Binde ein Handtuch oder Gummiband an einen festen Punkt. Halte es mit beiden Händen und mache die Padel-Schlagbewegung gegen den Widerstand. 10x pro Seite, 4 Runden\n" +
      "• **Overhead Press (Überkopfdrücken)**: Mit Wasserflaschen, drücke sie von den Schultern nach oben über den Kopf. 12x, 3 Runden\n\n" +
      "**3. REAKTIONSKRAFT**:\n" +
      "• **Drop Squats**: Stelle dich auf eine niedrige Stufe oder Treppenstufe. Lasse dich schnell in die Kniebeuge fallen und fange dich ab. 8x, 3 Runden\n" +
      "• **Schnelle Richtungswechsel**: Lauf 2 Schritte vor, dann sofort zurück. Dann seitlich links, rechts. Mach das auf ein imaginäres Kommando.\n\n" +
      "**4. STABILISIERUNG**:\n" +
      "• **Einbeinstand mit Wurf-Fangen**: Stelle dich auf ein Bein, wirf einen Ball oder Kissen in die Luft und fange ihn. 30 Sekunden pro Seite, 3 Runden\n\n" +
      "**SCHLUSSDEHNUNG (3 Minuten)**\n" +
      "• **Armkreuze für Schultern**: Stelle dich aufrecht hin, umarme dich selbst, so dass deine Hände die Schulterblätter berühren. 30 Sekunden\n" +
      "• **Unterarmdehnung**: Strecke einen Arm nach vorne, Handfläche nach oben. Ziehe mit der anderen Hand die Finger nach unten. 30 Sekunden pro Seite\n" +
      "• **Tiefe Ausfallschritt-Rotation**: Ausfallschrittposition, drehe deinen Oberkörper zur vorderen Seite. 30 Sekunden pro Seite\n" +
      "• **Entspannung in Rückenlage**: Leg dich auf den Rücken, Beine ausgestreckt, Arme neben dem Körper. Atme tief in den Bauch. 60 Sekunden",
  },
  {
    title: "Regeneration mit leichtem Kraftteil",
    content:
      "**KRAFTTEIL (10 Minuten - sanft)**\n\n" +
      "**1. MOBILISATION**:\n" +
      "• **Yoga Flow (Sonnengruß)**: Stehe aufrecht, Arme nach oben, beuge dich nach vorne, gehe in die Plank, senke dich ab, hebe den Oberkörper (Cobra), gehe zurück in den Vierfüßlerstand, dann in die Hocke und stehe auf. 3 Runden langsam\n\n" +
      "**2. LEICHTE KRAFT**:\n" +
      "• **Glute Bridges (Gesäßbrücke)**: Rückenlage, Beine angewinkelt. Hebe dein Gesäß an, bis Körper von Schultern zu Knien eine Linie bildet. 15x, 3 Runden\n" +
      "• **Wall Angels (Wandel-Engel)**: Stelle dich mit dem Rücken an eine Wand. Fahre mit den Armen langsam an der Wand hoch und runter, wie ein Schneeengel. 10x, 3 Runden\n" +
      "• **Bird-Dog (Vogel-Hund)**: Vierfüßlerstand. Strecke einen Arm nach vorne und das gegenüberliegende Bein nach hinten. Halte kurz. 10x pro Seite, 3 Runden\n\n" +
      "**3. BALANCE**:\n" +
      "• **Einbeinstand mit geschlossenen Augen**: Stelle dich auf ein Bein, schließe die Augen und halte das Gleichgewicht. 20 Sekunden pro Seite, 3 Runden\n\n" +
      "**4. ATMENARBEIT**:\n" +
      "• **Box Breathing (4-4-4-4)**: Setze dich bequem hin. Atme 4 Sekunden ein, halte 4 Sekunden die Luft, atme 4 Sekunden aus, warte 4 Sekunden. 5 Wiederholungen\n\n" +
      "**SCHLUSSDEHNUNG (5 Minuten)**\n" +
      "• **Frog Pose (Frosch)**: Gehe in den Vierfüßlerstand, spreize deine Knie weit auseinander, schiebe deine Hüfte nach hinten. 60 Sekunden\n" +
      "• **Butterfly (Schmetterling)**: Setze dich, Fußsohlen zusammen, Knie zur Seite fallen lassen. Beuge dich leicht nach vorne. 60 Sekunden\n" +
      "• **Sphinx (Sphinx)**: Bauchlage, stütze dich auf die Unterarme, Brustkorb anheben. 60 Sekunden\n" +
      "• **Nacken-Entspannung**: Sitze aufrecht, neige den Kopf langsam zu jeder Seite. 30 Sekunden\n" +
      "• **Gesichtsmassage**: Massiere mit den Fingerspitzen sanft deine Stirn, Schläfen und Kiefer. 30 Sekunden\n" +
      "• **Tiefenentspannung**: Rückenlage, Arme und Beine ausgestreckt, Augen geschlossen. Spüre, wie sich dein Körper schwer anfühlt. 90 Sekunden",
  },
];

export default function DailyPadelPlan() {
  const [plan, setPlan] = useState<any>(null);
  const [locked, setLocked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dailyPadelPlan");
    const date = localStorage.getItem("dailyPadelDate");
    const today = new Date().toDateString();

    if (stored && date === today) {
      setPlan(JSON.parse(stored));
      setLocked(true);
    }
  }, []);

  const generatePlan = () => {
    const base = plans[Math.floor(Math.random() * plans.length)];
    const fullPlan = {
      title: base.title,
      warmUp: warmUp.content,
      mainPart: base.content,
      totalTime: "20 Minuten",
      structure: "• Aufwärmen: 4-5 min\n• Hauptteil (Kraft): 10-14 min\n• Schlussdehnung: 3-5 min",
    };

    setPlan(fullPlan);
    setLocked(true);
    localStorage.setItem("dailyPadelPlan", JSON.stringify(fullPlan));
    localStorage.setItem("dailyPadelDate", new Date().toDateString());
  };

  const resetPlan = () => {
    localStorage.removeItem("dailyPadelPlan");
    localStorage.removeItem("dailyPadelDate");
    setPlan(null);
    setLocked(false);
    setShowDetails(false);
  };

  return (
    <div style={{ 
      maxWidth: 580, 
      margin: "40px auto", 
      padding: "30px", 
      background: "#f9f9f9",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      fontFamily: "'Inter', -apple-system, sans-serif"
    }}>
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        <h1 style={{ 
          fontSize: "28px", 
          fontWeight: 700, 
          color: "#1a1a1a",
          marginBottom: 8 
        }}>
          🎾 Padel Tagesplan
        </h1>
        <p style={{ 
          fontSize: "14px", 
          color: "#666",
          marginBottom: 20 
        }}>
          Tägliches 20-Minuten-Training mit Fokus auf Kraft & Beweglichkeit
        </p>
        
        {!plan && (
          <button
            onClick={generatePlan}
            style={{ 
              width: "100%", 
              padding: "16px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s",
              marginTop: 10
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Heutigen Trainingsplan generieren
          </button>
        )}
      </header>

      {plan && (
        <div style={{ 
          background: "white", 
          padding: "28px", 
          borderRadius: "12px",
          border: "1px solid #eee"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            marginBottom: 24 
          }}>
            <div>
              <div style={{ 
                display: "inline-block", 
                padding: "6px 14px", 
                background: "#e8f4ff", 
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#0066cc",
                marginBottom: 12
              }}>
                {plan.totalTime} • {plan.title.includes("Kraft") ? "💪" : "🧘‍♂️"}
              </div>
              <h2 style={{ 
                fontSize: "22px", 
                fontWeight: 700, 
                color: "#1a1a1a",
                marginBottom: 16 
              }}>
                {plan.title}
              </h2>
            </div>
            
            {locked && (
              <button
                onClick={resetPlan}
                style={{
                  padding: "8px 16px",
                  background: "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "13px",
                  cursor: "pointer",
                  color: "#666"
                }}
              >
                Neu starten
              </button>
            )}
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ 
              display: "flex", 
              gap: "12px", 
              marginBottom: 20,
              flexWrap: "wrap" 
            }}>
              <div style={{ 
                padding: "12px 16px", 
                background: "#f0f9ff", 
                borderRadius: "10px",
                flex: 1,
                minWidth: "120px"
              }}>
                <div style={{ fontSize: "12px", color: "#0066cc", fontWeight: 600 }}>STRUKTUR</div>
                <div style={{ fontSize: "13px", marginTop: 4 }}>{plan.structure}</div>
              </div>
              <div style={{ 
                padding: "12px 16px", 
                background: "#f0fff4", 
                borderRadius: "10px",
                flex: 1,
                minWidth: "120px"
              }}>
                <div style={{ fontSize: "12px", color: "#059669", fontWeight: 600 }}>SCHWERPUNKT</div>
                <div style={{ fontSize: "13px", marginTop: 4 }}>
                  {plan.title.includes("Regeneration") ? "Erholung" : 
                   plan.title.includes("Ausdauer") ? "Kraftausdauer" : "Kraft & Stabilität"}
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <h3 style={{ 
              fontSize: "16px", 
              fontWeight: 700, 
              color: "#1a1a1a",
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: "2px solid #667eea"
            }}>
              🔥 Aufwärmen
            </h3>
            <pre style={{ 
              whiteSpace: "pre-wrap", 
              fontSize: "14px", 
              lineHeight: 1.6,
              color: "#333",
              background: "#fafafa",
              padding: "16px",
              borderRadius: "8px",
              margin: 0
            }}>
              {plan.warmUp}
            </pre>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12 
            }}>
              <h3 style={{ 
                fontSize: "16px", 
                fontWeight: 700, 
                color: "#1a1a1a",
                paddingBottom: 8,
                borderBottom: "2px solid #764ba2"
              }}>
                💪 Hauptteil mit Krafttraining
              </h3>
              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  padding: "6px 12px",
                  background: "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "12px",
                  cursor: "pointer"
                }}
              >
                {showDetails ? "Weniger anzeigen" : "Mehr Details"}
              </button>
            </div>
            <pre style={{ 
              whiteSpace: "pre-wrap", 
              fontSize: "14px", 
              lineHeight: 1.6,
              color: "#333",
              background: "#fafafa",
              padding: "16px",
              borderRadius: "8px",
              margin: 0,
              maxHeight: showDetails ? "none" : "200px",
              overflow: "hidden",
              transition: "max-height 0.3s"
            }}>
              {plan.mainPart}
            </pre>
          </div>

          <div style={{ 
            background: "linear-gradient(135deg, #fdf6e3 0%, #faf3e0 100%)",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid #f0e6cc"
          }}>
            <h3 style={{ 
              fontSize: "15px", 
              fontWeight: 700, 
              color: "#8b5a2b",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              ⏱️ Zeitmanagement
            </h3>
            <p style={{ fontSize: "13px", color: "#8b5a2b", lineHeight: 1.5 }}>
              <strong>Gesamtzeit: 20 Minuten</strong> – Achte auf die Zeitvorgaben für jede Einheit. 
              Nutze einen Timer für die Intervallübungen. Die Pausen zwischen den Sätzen sollten 30-45 Sekunden nicht überschreiten.
            </p>
          </div>

          {locked && (
            <div style={{ 
              marginTop: 24, 
              padding: "16px", 
              background: "#f8f9fa", 
              borderRadius: "10px",
              borderLeft: "4px solid #667eea"
            }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#666", marginBottom: 4 }}>
                🔒 Tagesplan gespeichert
              </div>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
                Dieser Plan ist für heute festgelegt. Morgen um 00:00 Uhr kannst du einen neuen generieren.
              </p>
            </div>
          )}
        </div>
      )}

      <footer style={{ 
        marginTop: 40, 
        paddingTop: 20, 
        borderTop: "1px solid #eee",
        textAlign: "center" 
      }}>
        <p style={{ fontSize: "12px", color: "#999" }}>
          Entwickelt für Padel-Spieler • Jeder Tag ein ausgewogenes Training • 
          Immer mit Kraftteil (mind. 10 Min.) • Alle Übungen Schritt-für-Schritt erklärt
        </p>
      </footer>
    </div>
  );
}