"use client";

import { useState, useEffect } from "react";

const warmUp = {
  title: "Aufwärmen 3–5 Minuten",
  content:
    "Beginne im Stand und laufe locker auf der Stelle für etwa zwei Minuten. Die Schritte sind klein, die Arme schwingen entspannt mit. Danach lege dich auf den Bauch. Strecke den rechten Arm nach vorne und hebe ihn leicht an. Gleichzeitig hebst du das linke Bein einige Zentimeter vom Boden. Senke beides kontrolliert ab und wechsle die Seite. Zwei Durchgänge mit zehn bis zwölf Wiederholungen pro Seite. Zum Abschluss stehe aufrecht und kreise Schultern und Arme etwa eine Minute locker durch.",
};

const plans = [
  {
    title: "Rumpfstabilität",
    content:
      "Lege dich auf den Bauch und stütze dich auf Unterarme und Zehenspitzen. Der Körper bildet eine gerade Linie. Spanne den Bauch an und halte die Position dreissig bis fünfundvierzig Sekunden. Drei Durchgänge. Danach lege dich auf den Rücken. Beine angewinkelt, Füsse am Boden. Strecke einen Arm über den Kopf und gleichzeitig das gegenüberliegende Bein aus. Rücken bleibt am Boden. Drei Durchgänge mit je acht Wiederholungen pro Seite. Schlussdehnung: Im Vierfüsslerstand Rücken langsam rund und hohl bewegen. Zwei Minuten ruhig atmen.",
  },
  {
    title: "Beweglichkeit Hüfte und Rücken",
    content:
      "Grosser Ausfallschritt, hinteres Knie am Boden. Becken langsam nach vorne schieben, bis eine Dehnung spürbar ist. Fünfundvierzig Sekunden halten, Seite wechseln. Zwei Durchgänge. Danach breiter Stand, Knie beugen und tief sinken. Zwei Minuten halten. Schlussdehnung: Rückenlage, ein Knie zur Brust ziehen, dreissig Sekunden pro Seite.",
  },
  {
    title: "Beine und Gesäss",
    content:
      "Rückenlage, Füsse hüftbreit aufgestellt. Becken anheben, oben kurz halten, langsam absenken. Drei Durchgänge mit zwölf Wiederholungen. Danach Ausfallschritte im Stand. Zwei Durchgänge mit zehn Wiederholungen pro Seite. Schlussdehnung: Sitzend ein Bein über das andere legen und sanft zur Brust ziehen.",
  },
  {
    title: "Rotation und Kontrolle",
    content:
      "Sitzend, Oberkörper leicht zurückgelehnt. Langsame Drehung nach rechts und links. Drei Durchgänge mit zehn Wiederholungen pro Seite. Danach im Stand Oberkörper rotieren, Hüfte bleibt ruhig. Schlussdehnung: Lockeres Drehen im Stand für zwei Minuten.",
  },
  {
    title: "Sanfter Tag",
    content:
      "Vierfüsslerstand, Arm und gegenüberliegendes Bein strecken. Kurz halten, Seite wechseln. Drei Durchgänge mit acht Wiederholungen. Danach Seitenlage, oberes Bein langsam heben. Schlussdehnung: Rückenlage, drei Minuten ruhig in den Bauch atmen.",
  },
  {
    title: "Padel Vorbereitung",
    content:
      "Leichter Kniebeugestand, Oberkörper rotieren. Drei Durchgänge mit zehn Wiederholungen pro Seite. Danach kleine seitliche Schritte in leichter Hocke für drei Minuten. Schlussdehnung: Hüfte und Rücken locker dehnen für vier Minuten.",
  },
];

export default function DailyPadelPlan() {
  const [plan, setPlan] = useState<any>(null);
  const [locked, setLocked] = useState(false);

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
      content: `${warmUp.title}: ${warmUp.content}\n\nHauptteil: ${base.content}`,
    };

    setPlan(fullPlan);
    setLocked(true);
    localStorage.setItem("dailyPadelPlan", JSON.stringify(fullPlan));
    localStorage.setItem("dailyPadelDate", new Date().toDateString());
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Padel Tagesplan</h1>

      {!plan && (
        <button
          onClick={generatePlan}
          style={{ width: "100%", padding: 12, marginTop: 20 }}
        >
          Tagesplan abrufen
        </button>
      )}

      {plan && (
        <>
          <h2>{plan.title}</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{plan.content}</pre>
          <p style={{ fontSize: 12, opacity: 0.6 }}>
            Heute ist entschieden. Morgen gibt es einen neuen Plan.
          </p>
        </>
      )}
    </div>
  );
}
