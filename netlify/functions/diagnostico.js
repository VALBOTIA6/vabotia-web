export async function handler(event) {
  try {
    const data = JSON.parse(event.body || "{}");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ok: true,
        mensaje: "VALBOTIA OS conectado correctamente 🚀",
        origen: data.origen || "desconocido",
        metodo: data.metodo || "N/A",
        resultado: "Diagnóstico inicial recibido. IA lista para activarse."
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        error: "Error interno en VALBOTIA OS"
      })
    };
  }
}
