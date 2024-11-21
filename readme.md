## Ejemplo de Uso del Endpoint para Enviar Notificaciones

A continuación se muestra un ejemplo de cómo configurar un endpoint en tu servidor para enviar notificaciones utilizando las funciones `init` y `sendNotification`.

```javascript
const express = require('express');
const app = express();
app.use(express.json());

const { init, sendNotification } = require('i11rzed3m-server');

const publicKey = 'TU_CLAVE_PUBLICA';
const privateKey = 'TU_CLAVE_PRIVADA';

app.post('/send-notification', async (req, res) => { 
   const { subscription, payload }  = req.body;
   init(publicKey, privateKey);
   const response = await sendNotification(subscription, payload);
   res.json(response);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
